import React, { Component } from "react";
import Flash from 'react-reveal/Flash';
import Flip from 'react-reveal/Flip';
import { Link } from "react-router-dom";
//import products from "/data.json";
import Carousals from "./Carousals";

export default class AboutScreen extends Component {

    render() {
        return (
            <div classsNmae="body">
                <div className="topic">
                    <div className="block">
                        <Flip top>
                            <h1>Brand</h1>
                        </Flip>
                        <br />
                        <br />


                        <div class="bodypart">
                            <div class="box">

                                <div class="brand">
                                    <span class="block"></span>
                                    <h1>New Items<span></span></h1>
                                </div>

                                <div class="role">
                                    <div class="block"></div>
                                    <p>New Dresses New Dresses </p><br />
                                </div>

                            </div>
                        </div>

                    </div>

                    {/*}
                    <div className="line">
                        <Flash>
                            <h2>Let's Shop <Link to="/home"><i class="bi bi-cart-fill"></i></Link></h2>
                           
                        </Flash >
        </div>*/}
                </div>


                <div className="iconic">
                    <div className="middle">
                        <div className="circle">
                            <img src="https://cdn.iconscout.com/icon/free/png-128/dress-11-75167.png" />
                            <p>Dress</p>
                        </div>
                        <div className="circle">
                            <img src="https://cdn.iconscout.com/icon/free/png-128/dress-11-75167.png" />
                            <p>Dress</p>
                        </div>
                        <div className="circle">
                            <img src="https://cdn.iconscout.com/icon/free/png-128/dress-11-75167.png" />
                            <p>Dress</p>
                        </div>
                    </div>
                </div>


                <div className="about-main">
                    <div className="main-text">
                        <div className="line-solid">
                            <h2>Our Dresses</h2>
                        </div>
                        <p>
                            New Dresses New Dresses New Dresses New Dresses New Dresses New
                            New Dresses New Dresses New Dresses New Dresses New Dresses New
                            New Dresses New Dresses New Dresses New Dresses New Dresses New
                            New Dresses New Dresses New Dresses New Dresses New Dresses New
                            New Dresses New Dresses New Dresses New Dresses New Dresses New
                            New Dresses New Dresses New Dresses New Dresses New Dresses New
                            New Dresses New Dresses New Dresses New Dresses New Dresses New
                            New Dresses New Dresses New Dresses New Dresses New Dresses New
                            New Dresses New Dresses New Dresses New Dresses New Dresses New
                            New Dresses New Dresses New Dresses New Dresses New Dresses New
                        </p>

                    </div>
                    <div className="main-img">
                        <Carousals />
                    </div>
                </div>


                <div className="company">
                    <div className="r">
                        <h1>BRAND</h1>
                        <p>We opened the company in 2017. We opened our company in 2017. We have clothes in comfortable fabrics. It has a modern design for you who love to dress up </p>



                    </div>
                    <div className="l">
                        <br />
                        {/*<div className="text-center">" Always New Dress For You"</div>*/}
                        <blockquote>
                            Always new qaulity and new dress for you
  <span class="author"><i>Brand</i></span>
                        </blockquote>
                    </div>
                </div>



                <div className="contact">
                    <div className="contact-r">
                        <p>Contact</p>
                        <i class="bi bi-geo-alt-fill"></i>Thailand<br />
                        <i class="bi bi-telephone-fill"></i> Phone: +00 151515<br />
                        <i class="bi bi-envelope-fill"> </i> Email: mail@mail.com<br />
                    </div>
                    <div className="contact-l">
                        <div class="wrapper">
                            <ul>
                                <li class="facebook"><a href="#"><i class="bi bi-facebook" aria-hidden="true"></i></a></li>
                                <li class="twitter"><a href="#"><i class="bi bi-twitter" aria-hidden="true"></i></a></li>
                                <li class="instagram"><a href="#"><i class="bi bi-instagram" aria-hidden="true"></i></a></li>
                                <li class="google"><a href="#"><i class="bi bi-google" aria-hidden="true"></i></a></li>
                                <li class="whatsapp"><a href="#"><i class="bi bi-whatsapp" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    
                    
                </div>
                

            </div>
        );
    }
}
//https://wdexplorer.com/20-examples-beautiful-css-typography-design/