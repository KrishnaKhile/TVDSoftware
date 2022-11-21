import React from "react";
import { Button } from "react-bootstrap";
import { Clock, Envelope, GeoAlt, Telephone } from "react-bootstrap-icons";
import contactus1 from "../assets/img/contactus1.png";
const ContactUs = () => {
  return (
    <>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          {/* <div className="row">
            <div className="col-md" style={{ margin: "auto" }}>
              <div className="main-heading mt-2">
                <p> Get in Touch</p>
              </div>
              <section className="mb-4">
                <p className="text-center w-responsive mx-auto mb-3">
                  Do you have any questions? Please do not hesitate to contact
                  us directly. Our team will come back to you within a matter of
                  hours to help you.
                </p>

                <div className="row">
                  <div className="col-md-12 mb-md-0 mb-3">
                    <form id="contact-form">
                      <div className="row mb-3">
                        <div className="col-md-12">
                          <div className="md-form mb-0">
                            <input
                              type="text"
                              placeholder="Enter your full name"
                              className="form-control "
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col-md-6">
                          <div className="md-form mb-0">
                            <input
                              type="text"
                             placeholder="Enter your mobile number"
                              className="form-control mb-3"
                            />
                          </div>
                        </div>

                        <div className="col-md-6 ">
                          <div className="md-form mb-0">
                            <input type="text" placeholder="Enter your Email ID" className="form-control mb-3" />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-12">
                          <div className="md-form mb-0">
                            <input
                              type="text"
                              placeholder="Subject"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-12">
                          <div className="md-form">
                            <textarea
                              type="text"
                              placeholder="Massage"
                              rows="2"
                              className="form-control md-textarea"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="status mt-3"><Button>Submit</Button></div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-md App-logo">
              <img className="main-image" src={contactus1} alt="" />
            </div>
          </div> */}

          <section id="contact" className="contact">
            <div className="container">
              <header className="section-header">
                <p>Contact Us</p>
              </header>

              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-geo-alt">
                          {" "}
                          <GeoAlt />{" "}
                        </i>
                        <h3>Address</h3>
                        <p>
                          A108 Adam Street,
                          <br />
                          New York, NY 535022
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-telephone">
                          {" "}
                          <Telephone />{" "}
                        </i>
                        <h3>Call Us</h3>
                        <p>
                          +1 5589 55488 55
                          <br />
                          +1 6678 254445 41
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-envelope">
                          {" "}
                          <Envelope />{" "}
                        </i>
                        <h3>Email Us</h3>
                        <p>
                          info@example.com
                          <br />
                          contact@example.com
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-clock">
                          <Clock />
                        </i>
                        <h3>Open Hours</h3>
                        <p>
                          Monday - Friday
                          <br />
                          9:00AM - 05:00PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <form
                    action="forms/contact.php"
                    method="post"
                    className="php-email-form"
                  >
                    <div className="row gy-4">
                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Your Name"
                          required
                        />
                      </div>

                      <div className="col-md-6 ">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>

                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>

                      <div className="col-md-12">
                        <textarea
                          className="form-control"
                          name="message"
                          rows="6"
                          placeholder="Message"
                          required
                        ></textarea>
                      </div>

                      <div className="col-md-12 text-center">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">
                          Your message has been sent. Thank you!
                        </div>

                        <button type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
