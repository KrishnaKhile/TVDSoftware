import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import homeimage from "../assets/img/homeimage.png";

import graph from "../assets/img/graph.png";
import support from "../assets/img/support.png";
import trust from "../assets/img/trust.png";
import MoreProduct from "./MoreProduct";
import { EmojiSmile, JournalRichtext,  People } from "react-bootstrap-icons";
import {FaRegThumbsUp} from 'react-icons/fa';
import { Link } from "react-router-dom";

const Home = ({ scrollPosition }) => {
  const [hero,setHero]=useState('')
  const [why,setWhy]=useState('')
  useEffect(()=>{
    if(scrollPosition >= 100){
      setWhy('aos-init aos-animate')
    }
    else {
      setWhy('')
    }
    if(scrollPosition < 400){
      setHero('aos-init aos-animate')
    }
    else {
      setHero('')
    }
  },[scrollPosition])

  // console.log(why);

  return (
    <>
      <section id="hero" className="hero d-flex align-items-center" >
        <div className="container" >
          <div className="row row-reverse">
            <div className={`col-md App-logo ${hero}`} data-aos="zoom-out">
              <img className="main-image" src={homeimage} alt="" />
            </div>
            <div className="col-md" style={{ margin: "auto" }}>
              <div className={`main-heading ${hero}`} data-aos="fade-up" data-aos-delay="100">
                <p>
                  {" "}
                  "Software is the magic thing whose importance only goes up
                  over time."
                </p>
              </div>
              <div className={`main-content ${hero}` } data-aos="fade-up" data-aos-delay="350">
                <p>
                  {" "}
                  A Software Developer is a professional who is charged with
                  designing and coding software for businesses and consumers
                  alike. They work closely with clients to determine what they
                  need, then use programming languages to create programs.
                </p>
              </div>
              <div className={`btnc ${hero}`} data-aos="fade-up" data-aos-delay="350">
                <Link to="/contact-us" className="btn btn-primary btn-more">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="why-tvd">
        <div className="why-tvd-text">Why TVD Software</div>
        <div className={`container ${why}`} data-aos="fade-up">
          <div className="row">
            <div className={`col-md why-tvd-content ${why}`} data-aos="fade-up" data-aos-delay="100">
              <div className="flex-column">
                <div className="value">
                  <img className="why-img" src={graph} alt="" />
                </div>
                <div>
                  <div className="why-head">Lorem ipsum dolor sit amet.</div>
                  <div className="main-content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia tempora in voluptate iusto beatae repudiandae ab
                    totam nobis a itaque!
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-md why-tvd-content ${why}`} data-aos="fade-up" data-aos-delay="300">
              <div className="flex-column">
                <div className="value">
                  <img className="why-img" src={trust} alt="" />
                </div>
                <div>
                  <div className="why-head">Lorem ipsum dolor sit amet.</div>
                  <div className="main-content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia tempora in voluptate iusto beatae repudiandae ab
                    totam nobis a itaque!
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-md why-tvd-content ${why}`} data-aos="fade-up" data-aos-delay="600">
              <div className="flex-column">
                <div className="value">
                  <img className="why-img" src={support} alt="" />
                </div>
                <div>
                  <div className="why-head">Lorem ipsum dolor sit amet.</div>
                  <div className="main-content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia tempora in voluptate iusto beatae repudiandae ab
                    totam nobis a itaque!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MoreProduct scrollPosition={scrollPosition} />

      <section id="counts" className="counts">
      <div className={`container ${why}`} data-aos="fade-up">

        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"> <EmojiSmile/> </i>
              <div>
                <span className="purecounter">344</span>
                <p>  Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-journal-richtext" style={{color:"#ee6c20"}}> <JournalRichtext/> </i>
              <div>
                <span  className="purecounter">45</span>
                <p>Projects</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-headset" style={{color:"#15be56"}}> <FaRegThumbsUp/> </i>
              <div>
                <span className="purecounter">6</span>
                <p>Years in Business</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-people" style={{color:"#bb0852"}}> <People/> </i>
              <div>
                <span className="purecounter">25</span>
                <p>Total Employee</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>



      <div className="why-tvd-text">Our Clients</div>
    </>
  );
};

export default Home;
