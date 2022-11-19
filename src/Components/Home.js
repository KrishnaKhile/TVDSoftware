import React from "react";
import { Button } from "react-bootstrap";
import homeimage from "../assets/img/homeimage.png";

import graph from "../assets/img/graph.png";
import support from "../assets/img/support.png";
import trust from "../assets/img/trust.png";
import MoreProduct from "./MoreProduct";
const Home = ({ hero, why }) => {
  

  console.log(why);

  return (
    <>
      <section id="hero" class="hero d-flex align-items-center">
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
                <Button className="btn-more">Contact Us</Button>
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
      {/* <svg viewBox="0 0 1366 631" width="100%" height="70vmin" class="_dkkao8NaN" preserveAspectRatio="none" aria-hidden="true"><path d="M1366 614.626V42.2878C1216.44 32.481 1071.16 25.6274 902.892 20.0618C647.674 11.6203 291.457 3.37253 0 0.135254V612.111C313.572 631.987 694.403 637.367 1189.78 619.86C1248.63 617.783 1307.48 616.071 1366 614.626Z" fill="#e5f6fe"></path>
</svg> */}

      <MoreProduct/>

      <div className="why-tvd-text">Our Clients</div>
    </>
  );
};

export default Home;
