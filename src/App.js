// import logo from './TVD_LOGO.png';
import './App.css';
import { Route, Routes } from "react-router-dom";
import React from 'react'
import NavbarMain from './Navbar';
import Home from './Components/Home';
import Careers from './Components/Careers';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import SocialIcon from './Components/SocialIcon';
function App() {
  return (
    <div className="App">
            <NavbarMain/>
            <SocialIcon/>
            <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/careers" element={<Careers />} />
       <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact-us"
          element={<ContactUs />}
        />
         {/* <Route path="/*" element={<Page404 />} />
        <Route path="/nestedroute/" element={<Nestedexp />}>
          <Route path="nesabout" element={<NesAbout />} />
          <Route path="editprofile" element={<EditProfile />} />
          <Route path="setting" element={<Setting />} />
          <Route
            path="setting/EditNor/:nor_id/:nor_name/:nor_shortcode/:nor_email/:nor_mobile"
            element={<EditNor />}
          />
          <Route path="muicurd" element={<MuiCurd />} />
        </Route> */}
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
