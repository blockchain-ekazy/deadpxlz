import React, { useState, useEffect } from "react";
import abi from "./abi.json";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
require("dotenv").config();

const REACT_APP_CONTRACT_ADDRESS = "0x9356cCeeF30EfE0249a105608B0d3b2F0F427629";
const SELECTEDNETWORK = "4";
const SELECTEDNETWORKNAME = "Ethereum";
const nftquantity = 1000;

function Mintbtn() {
  const [errormsg, setErrorMsg] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [walletConnected, setWalletConnected] = useState(0);
  const [maxallowed, setmaxallowed] = useState("0");

  useEffect(async () => {
    if (await detectEthereumProvider()) {
      // setProvider(true);
      window.web3 = new Web3(window.ethereum);
      const web3 = window.web3;
      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);

        console.log(await ct.methods.totalSupply().call());
        if (nftquantity - (await ct.methods.totalSupply().call()) == 0) {
          setErrorMsg("SOLD OUT");
        }
      } else {
        setErrorMsg('Select "' + SELECTEDNETWORKNAME + '" network!');
      }
    } else {
      setErrorMsg("Ethereum Wallet not found!");
    }
    if (window.ethereum) {
      handleEthereum();
    } else {
      window.addEventListener("ethereum#initialized", handleEthereum, {
        once: true,
      });
      setTimeout(handleEthereum, 10000);
    }

    function handleEthereum() {
      const { ethereum } = window;
      if (ethereum && ethereum.isMetaMask) {
        console.log("Ethereum successfully detected!");
        // setProvider(true);
      } else {
        setErrorMsg("Please install MetaMask!");
        // setProvider(false);
      }
    }
  }, []);

  async function loadWeb3() {
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      // Meta Mask Connected Account Address
      let metaMaskAccount = await web3.eth.getAccounts();
      metaMaskAccount = metaMaskAccount[0];

      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        // // creating contract instance
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);
        let current = await ct.methods.totalSupply().call();
        if (Number(current) === nftquantity) {
          console.log("Sold out");
          return;
        }

        let price = await ct.methods.PRICE().call(); //await ct.methods.getPrice().call();

        let alreadyMinted = await ct.methods.balanceOf(metaMaskAccount).call();
        let maxa = await ct.methods.MAX_PER_Address().call();

        if (Number(alreadyMinted) + Number(quantity) <= maxa) {
          await ct.methods.mint(quantity).send({
            from: metaMaskAccount,
            value: price * quantity,
          });
        } else {
          setErrorMsg("Already Minted Max");
        }

        setQuantity(1);
      } else {
        setErrorMsg(
          'Select "' +
            SELECTEDNETWORKNAME +
            '" network in your wallet to buy the nft'
        );
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      // window.alert(
      //   "Non-Ethereum browser detected. You should consider trying MetaMask!"
      // );
      {
        setErrorMsg(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    }
  }

  async function connectWallet() {
    if (await detectEthereumProvider()) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;

      if ((await web3.eth.net.getId()) == SELECTEDNETWORK) {
        // // creating contract instance
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);

        const Status = await ct.methods.status().call();

        if (Status == 0) {
          setErrorMsg("Sale Not started");
        } else if (Status == 2) {
          setWalletConnected(1);
        }

        let maxa = await ct.methods.MAX_PER_Transtion().call();
        setmaxallowed(maxa);
      } else {
        setErrorMsg("Select Ethereum Network!");
      }
    }
  }

  return (
    <div className="BtnDiv mt-5">
      {!errormsg ? (
        <div className="row align-items-center">
          {walletConnected == 0 ? (
            <div className="col-12">
              <button
                style={{ cursor: "pointer" }}
                onClick={() => {
                  connectWallet();
                }}
                className="saxc text-center d-block w-100 mt-5"
              >
                Connect Wallet
              </button>
            </div>
          ) : (
            ""
          )}
          {walletConnected == 1 ? (
            <>
              <div className="col-6">
                <div className="d-flex align-items-center justify-content-center">
                  <button
                    className="saxc mx-3"
                    onClick={() => setQuantity(quantity - 1)}
                    disabled={quantity == 1}
                  >
                    -
                  </button>
                  <span className="h1 mb-0"> {quantity} </span>
                  <button
                    className="saxc mx-3"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity == maxallowed}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="col-6 pt- 3 pt-sm-0">
                <button
                  className="w-100 saxc text-center"
                  onClick={() => loadWeb3()}
                >
                  Mint
                </button>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      ) : (
        <h5
          className="mt-2 supplytext text-center"
          style={{ color: "#ff0000" }}
        >
          <b>{errormsg}</b>
        </h5>
      )}
    </div>
  );
}

export default Mintbtn;
