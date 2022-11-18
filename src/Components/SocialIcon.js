import React from 'react'
import { FaFacebookF,FaTwitter,FaEnvelope,FaPhoneAlt } from "react-icons/fa";

const SocialIcon = () => {
  return (
    <>
      <nav className="social">
          <ul>
              <li><a className='social-item' href="https://twitter.com/tvdsoftware/" target="_blank" rel="noopener noreferrer"> <i><FaTwitter/></i>twitter.com/tvdsoftware</a></li>
              <li><a className='social-item' href="https://www.facebook.com/tvdsoftware/" target="_blank" rel="noopener noreferrer"> <i><FaFacebookF/></i>facebook.com/tvdsoftware/ </a></li>
              <li><a className='social-item' href="mailto:tvdsoftware@gmail.com"><i><FaEnvelope/></i>tvdsoftware@gmail.com</a></li>
              <li><a className='social-item' href="tel:+917498599595"> <i><FaPhoneAlt/></i>+91 9325080005</a></li>
          </ul>
      </nav>
    </>
  )
}

export default SocialIcon
