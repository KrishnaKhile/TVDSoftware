import React from "react";
import logo from "../TVD_LOGO.png";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMobileAlt,
} from "react-icons/fa";
import { ImOffice } from "react-icons/im";
const Footer = () => {
  return (
    <>
      <div>
        <footer
          className="text-center text-lg-start text-white"
          //   style="background-color: #1c2331"
          style={{ backgroundColor: "#1c2332" }}
        >
          <section
            className="d-flex justify-content-between p-3"
            // style="background-color: #6351ce"
            style={{ backgroundColor: "#3f3e77" }}
          >
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="/" className="text-white me-4">
                <FaFacebook />
              </a>
              <a href="/" className="text-white me-4">
                <FaTwitter />
              </a>
              <a href="/" className="text-white me-4">
                <FaGoogle />
              </a>
              <a href="/" className="text-white me-4">
                <FaInstagram />
              </a>
              <a href="/" className="text-white me-4">
                <FaLinkedinIn />
              </a>
              <a href="/" className="text-white me-4">
                <FaGithub />
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6>
                    <img
                      style={{ height: "60px", marginRight: "6px" }}
                      src={logo}
                      alt="LOGO"
                    ></img>
                  </h6>
                  <hr
                    className="mb-3 mt-0 d-inline-block mx-auto"
                    // style="width: 60px; background-color: #7c4dff; height: 2px"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <h6 className="text-uppercase fw-bold">
                    TVD Software Solutions
                  </h6>
                  <p>
                    is global software services provider offering application
                    development and maintenance re-engeeniring and migration.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    // style="width: 60px; background-color: #7c4dff; height: 2px"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <a href="#!" className="text-white">
                      TVD Software
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Krishna
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Krishna khile
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      React js
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    // style="width: 60px; background-color: #7c4dff; height: 2px"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <a href="#!" className="text-white">
                      Your Account
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Become an Affiliate
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Shipping Rates
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Help
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    // style="width: 60px; background-color: #7c4dff; height: 2px"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <ImOffice /> Kamala Vihar Appt., Near Paulbuddhe highschool,
                    Pipeline Road,Savedi,Ahmednagar.
                  </p>
                  <p>
                    <FaEnvelope /> tvdsoftware@gmail.com
                  </p>
                  <p>
                    <FaPhoneAlt /> +91 9325080005
                  </p>
                  <p>
                    <FaMobileAlt /> +91 8261948910
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-3"
            // style="background-color: rgba(0, 0, 0, 0.2)"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2017-2018 Copyright:
            <a className="text-white" target="_blank" href="www.tvdsoftware.in">
              TVD Software Solution
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
