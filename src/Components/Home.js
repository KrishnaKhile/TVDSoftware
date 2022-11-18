import React from "react";
import { Button } from "react-bootstrap";
import homeimage from "../assets/img/homeimage.png";
import cmsimg from "../assets/img/cmsimg.png";
import dllimg from "../assets/img/dllimg.png";
import graph from "../assets/img/graph.png";
import support from "../assets/img/support.png";
import trust from "../assets/img/trust.png";
import down from "../assets/img/down.png";
import up from "../assets/img/up.png";
import MoreProduct from "./MoreProduct";
const Home = () => {
  const [show, toggleShow] = React.useState(false);
  return (
    <>
    <section id="hero" class="hero d-flex align-items-center">
      <div className="container">
        <div className="row row-reverse">
          <div className="col-md App-logo">
            <img className="main-image" src={homeimage} alt="" />
          </div>
          <div className="col-md" style={{ margin: "auto" }}>
            <div className="main-heading">
              <p>
                {" "}
                "Software is the magic thing whose importance only goes up over
                time."
              </p>
            </div>
            <div className="main-content">
              <p>
                {" "}
                A Software Developer is a professional who is charged with
                designing and coding software for businesses and consumers
                alike. They work closely with clients to determine what they
                need, then use programming languages to create programs.
              </p>
            </div>
            <div className="btnc">
              <Button className="btn-more">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
      </section>
      <div className="why-tvd">
        <div className="why-tvd-text">Why TVD Software</div>
        <div className="container">
          <div className="row">
            <div className="col-md why-tvd-content">
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
            <div className="col-md why-tvd-content">
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
            <div className="col-md why-tvd-content">
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

      <div className="why-tvd-text">Our Products</div>

      {/* College management system */}
      <div  className="container aos-init aos-animate" data-aos="fade-up">
        <div className="row">
          <div className="col-md App-logo aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <img className="main-image" src={cmsimg} alt="" />
          </div>
          <div className="col-md aos-init aos-animate" style={{ margin: "auto" }} data-aos="fade-up" data-aos-delay="400">
            <div className="main-heading"><p> "College Management System"</p></div>
            <div className="main-content"><p>
              A college management system is a cloud based educational ERP
              software that enables HEIs to manage online admission & fees,
              students' attendance, library books, etc. It can also generate
              students' performance reports & simplify the hassles of faculty.</p>
            </div>
            
            <div className="btnc">
              <Button className="btn-more">Get Demo</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Digital language lab */}
      <div className="container our-product-even">
        <div className="row row-reverse">
          <div className="col-md App-logo">
            <img className="main-image" src={dllimg} alt="" />
          </div>
          <div className="col-md" style={{ margin: "auto" }}>
            <div className="main-heading"><p> "Digital Language Lab"</p></div>
            <div className="main-content"><p>
              Digital language laboratory is software that make learning more
              interactive for student. It enhances speaking, listening and
              speaking skills. The interactive digital platform improves
              language grammar while making learning effective and interesting.</p>
            </div>
            <div className="btnc">
              <Button className="btn-more">Get Demo</Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        {show && <div>{<MoreProduct />}</div>}
        <p onClick={() => toggleShow(!show)}>
          {" "}
          {show ? (
            <>
              <b> Less Products</b> <br />{" "}
              <img alt="Less Product" className="up-img" src={up} />
            </>
          ) : (
            <>
              <img alt="More Product" className="down-img" src={down} />
              <br />
              <b> More Products</b>
            </>
          )}
        </p>
      </div>



      <div className="why-tvd-text">Our Clients</div>
    </>
  );
};

export default Home;
