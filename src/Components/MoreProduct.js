import React, { useEffect, useState } from 'react'
import { Button } from "react-bootstrap";
import lmsimg from "../assets/img/lmsimg.png";
import webhosting from "../assets/img/webhosting.png";
import down from "../assets/img/down.png";
import up from "../assets/img/up.png";
import cmsimg from "../assets/img/cmsimg.png";
import dllimg from "../assets/img/dllimg.png";
const MoreProduct = ({scrollPosition}) => {
  const [show, toggleShow] = useState(false);

console.log(scrollPosition)

const [product,setProduct] = useState('')
useEffect(()=>{
if(scrollPosition >= 700){
setProduct('aos-init aos-animate')
}
else {
  setProduct('')
}
},[scrollPosition])

  return (
    <>
    
<div className={`why-tvd-text ${product}`} data-aos="fade-up">Our Products</div>

{/* College management system */}
<div className={`container ${product}`} data-aos="fade-up">
  <div className="row">
    <div
      className={`col-md App-logo ${product}`} data-aos="fade-up"
      data-aos-delay="200"
    >
      <img className="main-image" src={cmsimg} alt="" />
    </div>
    <div
      className="col-md aos-init aos-animate"
      style={{ margin: "auto" }}
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div className="main-heading">
        <p> "College Management System"</p>
      </div>
      <div className="main-content">
        <p>
          A college management system is a cloud based educational ERP
          software that enables HEIs to manage online admission & fees,
          students' attendance, library books, etc. It can also generate
          students' performance reports & simplify the hassles of faculty.
        </p>
      </div>

      <div className="btnc">
        <Button className="btn-more">Get Demo</Button>
      </div>
    </div>
  </div>
</div>

{/* Digital language lab */}
<div className="container our-product-even" >
  <div className="row row-reverse">
    <div className="col-md App-logo">
      <img className="main-image" src={dllimg} alt="" />
    </div>
    <div className="col-md" style={{ margin: "auto" }}>
      <div className="main-heading">
        <p> "Digital Language Lab"</p>
      </div>
      <div className="main-content">
        <p>
          Digital language laboratory is software that make learning more
          interactive for student. It enhances speaking, listening and
          speaking skills. The interactive digital platform improves
          language grammar while making learning effective and
          interesting.
        </p>
      </div>
      <div className="btnc">
        <Button className="btn-more">Get Demo</Button>
      </div>
    </div>
  </div>
</div>

<div>
  {show && <>
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
  </>}
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






      


    </>
  )
}

export default MoreProduct
