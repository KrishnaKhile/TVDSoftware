import React from 'react'
import { Button } from "react-bootstrap";
import lmsimg from "../assets/img/lmsimg.png";
import webhosting from "../assets/img/webhosting.png";

const MoreProduct = () => {

  return (
    <>
      {/* Library managemant system */}
      <div className="container our-product-odd">
        <div className="row">
          <div className="col-md App-logo">
            <img className="main-image" src={lmsimg} alt="" />
          </div>
          <div className="col-md" style={{ margin: "auto" }}>
            <div className="main-heading"><p> "Library Management System"</p></div>
            <div className="main-content"><p>
              The library management system is an ERP software for managing
              library, track all the books borrowed with due dates, fees, etc.
              This system completely automates all your library’s activities.</p>
            </div>
            <div className="btnc">
              <Button className="btn-more">Get Demo</Button>
            </div>
          </div>
        </div>
      </div>

      {/* web hosting */}

      <div className="container our-product-even">
        <div className="row row-reverse">
          <div className="col-md App-logo">
            <img className="main-image" src={webhosting} alt="" />
          </div>
          <div className="col-md" style={{ margin: "auto" }}>
            <div className="main-heading"> <p> "Web Hosting Service"</p></div>
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


    </>
  )
}

export default MoreProduct
