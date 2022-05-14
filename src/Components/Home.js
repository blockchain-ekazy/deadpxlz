import "./Home.css";
import ReactDOM from "react-dom";
import { Carousel } from "@trendyol-js/react-carousel";
import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// import $ from "jquery";
import Img1 from "../Imgs/1.png";
import Img2 from "../Imgs/2.png";
import Img3 from "../Imgs/3.png";
import Img4 from "../Imgs/4.png";
import Img5 from "../Imgs/5.png";
import Img6 from "../Imgs/6.png";
import Img7 from "../Imgs/7.png";
import Img8 from "../Imgs/8.png";
import Img9 from "../Imgs/9.png";
import Img10 from "../Imgs/10.png";
import Img11 from "../Imgs/11.png";
import Img12 from "../Imgs/12.png";
import Img13 from "../Imgs/13.gif";
import Img14 from "../Imgs/14.gif";
import Img15 from "../Imgs/15.gif";
import Img16 from "../Imgs/16.png";
import video1 from "../Imgs/17.mp4";

import MintBtn from "./mintbtn";

export default function Home() {
  const style = {
    textAlign: "center",
    background: "teal",
    padding: "200px 0",
    fontSize: "30px",
  };

  const properties = {
    duration: 1,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    indicators: false,
    infinite: true,
  };
  return (
    <>
      <div className="tyty">
        <div className="MAIN">
          <div className="container-fluid navbgo ">
            <nav class="navbar container navbar-expand-lg navbar-dark navv">
              <div class="container-fluid">
                <a class="navbar-brand d-block d-md-none" href="#">
                  {/* <h2 class="">NFT BOXING CLUB</h2> */}
                </a>
                {/* <img className="ghy" src={Img5}></img> */}
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#mob-navbar"
                  aria-label="Toggle"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse " id="mob-navbar">
                  <ul class="navbar-nav mb-2 mb-lg-0 ">
                    <li class="nav-item px-3">
                      <a class="nav-link active" aria-current="page" href="/">
                        Home
                      </a>
                    </li>
                    <li class="nav-item px-3">
                      <a class="nav-link" href="#story">
                        Our Story
                      </a>
                    </li>
                    <li class="nav-item px-3">
                      <a class="nav-link" href="#Rd">
                        Road Map
                      </a>
                    </li>
                    {/* <li class="nav-item px-3">
                      <a class="nav-link" href="#faq">
                        FAQs
                      </a>
                    </li> */}
                    <li class="nav-item px-3">
                      <a class="nav-link" href="#team">
                        Team
                      </a>
                    </li>
                  </ul>
                  <form class="d-flex btnns ">
                    <div class="social-buttons text-center ">
                      <span class="neo-button px-2">
                        <a href="https://discord.com/" target="_blank">
                          <i class="buttons fab fa-discord  zas"></i>
                        </a>
                      </span>
                      <span class="neo-button px-2">
                        <a
                          href=" https://twitter.com/DeadPixlzNFT"
                          target="_blank"
                        >
                          <i class="fab fa-twitter zas "></i>
                        </a>
                      </span>
                      <span class="neo-button px-2">
                        <a
                          href="https://www.instagram.com/deadpixlz/"
                          target="_blank"
                        >
                          <i class="fab fa-instagram zas"></i>
                        </a>
                      </span>
                      <span class="neo-button px-2"></span>
                    </div>
                  </form>
                </div>
              </div>
            </nav>
          </div>

          <div className="container-fluid AAA">
            <a id="Home"></a>
            {/* <div className="mmm">
          <button className="btn2">twitter</button>
        </div> */}
            <div className="container">
              <div className="row align-items-end ">
                <div className="col-md-3">
                  <img className="w-100 bnm" src={Img3}></img>
                </div>
                <div className="col-md-6">
                  <div className="text-center nji">
                    <img className="w-100 im1" src={Img1}></img>
                    <p className="mt-5 pp">
                      Meet a collection of individually hand-drawn 1,000 Dead
                      Pixlz set to take over Web 3. Life is better pixelated.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                      <MintBtn />
                      {/* <button className="saxc text-center d-block w-100 mt-5">
                        Coming Soon
                      </button> */}
                    </div>
                    <div className="col-lg-3"></div>
                    <div className="bnx"></div>
                  </div>
                </div>
                <div className="col-md-3 text-center">
                  <img className="w-100 bnm" src={Img4}></img>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid CCC">
            <div className="row">
              <div className="col-md-12 px-0 ">
                <video className="vid " loop autoPlay muted controls>
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          <a id="story"></a>
          <div className="container-fluid sss">
            <div className="container">
              <div className="row ">
                <div className="col-md-12">
                  <div className="text-center">
                    <h2 className="ngt ">
                      THE STORY AND VISION BEHIND DEAD PIXLZ
                    </h2>
                  </div>
                  <p className="text-center mt-5 pki">
                    This pixelated art form of DEADFELLAZ pays the ultimate
                    homage to one of the best NFT projects in the space, a
                    legendary pioneer, as well as taking references to all the
                    NFT projects in the space that has, in one way or another,
                    influenced us and shaped the way we embrace this wonderful
                    new world.<br></br>
                    <br></br>Each of the 1,000 DEADPIXLZ were individually
                    hand-drawn over the course of 8 months with dedication and
                    artistic intuition to create the perfect collection.
                    <br></br>
                    <br></br>
                    DEADPIXLZ aspires to bring the best DEADFELLAZ derivative
                    with a strong focus on art quality, imagination and most
                    importantly, fun and love in this beautiful space where all
                    is one.
                  </p>
                </div>
              </div>
              <div className="row bncx">
                <div className="col-md-3 text-center">
                  <img className="w-75" src={Img12}></img>
                  <h2 className="ngt1 ">LEGENDARY</h2>
                </div>
                <div className="col-md-3 text-center">
                  <img className="w-75" src={Img13}></img>
                  <h2 className="ngt1 ">I'M INFECTED</h2>
                </div>
                <div className="col-md-3 text-center">
                  <img className="w-75" src={Img14}></img>
                  <h2 className="ngt1 ">MY FRENZZ</h2>
                </div>
                <div className="col-md-3 text-center">
                  <img className="w-75" src={Img15}></img>
                  <h2 className="ngt1 ">ANIMATED</h2>
                </div>
              </div>
              <div className="row ghk">
                <div className="col-md-12 mt-5">
                  <p className="pnp">
                    {" "}
                    "Art is the expression of the profoundest thoughts in the
                    simplest way."
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-9 xxxx ">
                  <p className="pnp1 ">-Albert Einstein.</p>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
          <div>
            {/* <div className="mdsd">
                  <Slide {...properties}>
                    <div>
                      <img className="w-100" src={Img5}></img>
                    </div>
                    <div>
                      <img className="w-100" src={Img6}></img>
                    </div>
                    <div>
                      <img className="w-100" src={Img7}></img>
                    </div>
                    <div>
                      <img className="w-100" src={Img8}></img>
                    </div>
                    <div>
                      <img className="w-100" src={Img9}></img>
                    </div>
                    <div>
                      <img className="w-100" src={Img5}></img>
                    </div>
                    <div>
                      <img className="w-100" src={Img6}></img>
                    </div>
                    <div>
                      <img className="w-100" src={Img7}></img>
                    </div>
                    <div>
                      <img className="w-100" src={Img8}></img>
                    </div>
                    <div>
                      <img className="w-100" src={Img9}></img>
                    </div>
                    <div>
                      <img className="w-100" src={Img5}></img>
                    </div>
                    <div>
                      <img className="w-100" src={Img6}></img>
                    </div>
                    <div>
                      <img className="w-100" src={Img7}></img>
                    </div>
                    <div>
                      <img className="w-100" src={Img8}></img>
                    </div>
                    <div>
                      <img className="w-100" src={Img9}></img>
                    </div>
                  </Slide>
                </div> */}
          </div>
        </div>
      </div>
      <a id="Rd"></a>
      <div className="MAIN2">
        <div class="container-fluid ZZZ">
          <div className="container">
            <div class="row">
              <div class="col-md-12">
                <h2 className="pt-5 text-center RD mt-5 abc">RoadMap</h2>

                <div class="main-timeline mt-5">
                  <div class="timeline">
                    <div class="timeline-icon">
                      <span class="year">1</span>
                      <div class="vl"></div>
                    </div>

                    <div class="timeline-content">
                      <h3 class="title">Stage One</h3>
                      <br></br>

                      <p class="description">Mint.</p>
                    </div>
                  </div>

                  <div class="timeline pt-5 mt-1">
                    <div class="timeline-icon">
                      <span class="year">
                        2 <div class="vlb"></div>{" "}
                      </span>
                    </div>
                    <div class="timeline-content">
                      <h3 class="title">Stage Two</h3>
                      <br></br>
                      <p class="description">Enjoy the art.</p>
                    </div>
                  </div>
                  <div class="timeline">
                    <div class="timeline-icon">
                      <span class="year">3</span>
                      <div class="vlc"></div>
                    </div>
                    <div class="timeline-content">
                      <h3 class="title">Stage Three</h3>
                      <br></br>
                      <p class="description">We build.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a id="faq"></a>
        <div className="fafa ">
          <div className="container-fluid III">
            <div class="container">
              <a id="Faq"></a>
              {/* <div class="row">
                <div class="col-md-12">
                  <div class="section-title text-center wow zoomIn mt-5">
                    <h1 className="titletext gfd text-center pb-3 xyz">FAQs</h1>
                    <span></span>
                  </div>
                </div>
              </div> */}
              {/* <div class="row">
                <div class="col-md-12">
                  <div
                    class="panel-group"
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
                          <a
                            class="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            How do I get whitelisted?
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseOne"
                        class="panel-collapse collapse in"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                      >
                        <div class="panel-body">
                          <p className="brt">
                            You can get Whitelisted by following the steps on
                            our discord
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingTwo">
                        <h4 class="panel-title">
                          <a
                            class="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            How can I buy a Lazy Leopard NFT?
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseTwo"
                        class="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                      >
                        <div class="panel-body ">
                          <p>
                            You will be able to purchase a lazy Leopard NFT
                            directly on this website with Ethereum (ETH) by
                            using the MetaMask extension.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                          <a
                            class="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What is the mint price of Lazy Leopard NFT ?
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseThree"
                        class="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                      >
                        <div class="panel-body ">
                          <p>
                            Our Pre-Sale mint price is 0.06 ETH + gas fees per
                            NFT. Our Whitelisted members will be allowed to mint
                            two NFTs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingFour">
                        <h4 class="panel-title text-white">
                          <a
                            class="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            How long after minting will my NFT be revealed?
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseFour"
                        class="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingFour"
                      >
                        <div class="panel-body ">
                          <p>The reveal will be 5 days after launch. </p>
                        </div>
                      </div>
                    </div>
                    <div class="panel panel-default">
                      <div class="panel-heading" role="tab" id="headingFive">
                        <h4 class="panel-title text-white">
                          <a
                            class="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            How can I contact the team?
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseFive"
                        class="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingFive"
                      >
                        <div class="panel-body ">
                          <p>
                            We are all super active, you can find us on Discord
                            and Twitter and Instagram!{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <a id="team"></a>
            <section id="team" class="team_member section-padding">
              <div class="container kuy">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1 className="gsa"> BEHIND DEADPIXLZ</h1>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-4"></div>
                  <div className="col-md-4 text-center">
                    <img className="w-75" src={Img16}></img>
                    <h2 className="ACA mt-3">DeadFellaz #3490</h2>
                  </div>
                  <div className="col-md-4"></div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-12 text-center">
                    <p className="frt">
                      I am Jazzy.<br></br>A photographer by profession, a pixel
                      artist by heart. Art is everything to me, which defines
                      the way I look at every art stroke, every sentimental
                      declaration and every vision of each artist and creation.
                      <br></br>
                      <br></br> I hope that every pixel art that I create brings
                      love, fun and joy to everyone.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* <hr className="hri"></hr> */}
      <div className="container-fluid dsds text-center py-2 text-white   ">
        <p>
          <a href=" https://discord.com/" target="_blank">
            <i className="fab fa-discord Footer px-1 zas"></i>
          </a>
          <a href="https://twitter.com/DeadPixlzNFT" target="_blank">
            <i className=" px-1 Footer fab fa-twitter zas"></i>
          </a>
          <a href=" https://www.instagram.com/deadpixlz/" target="_blank">
            <i className=" px-1 Footer fab fa-instagram zas"></i>
          </a>
          <a className="cxcx" href="/NFT">
            <span className="px-1 Footer zas px-5">© 2022,jazzysteph</span>
          </a>
        </p>
        {/* <div className="rotate">
          <button className="dew">Twitter</button>{" "}
        </div>
        <div className="rotate1">
          <button className="dew1">Discord</button>
        </div> */}
      </div>
    </>
  );
}
