// import logo from './TVD_LOGO.png';
import React,{useState,useEffect} from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import NavbarMain from './Navbar';
import Home from './Components/Home';
import Careers from './Components/Careers';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import SocialIcon from './Components/SocialIcon';
// import Aos from './assets/aos/aos';

function App() {

  const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};
// console.log(scrollPosition)
useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);



  return (
    <div className="App">
            <NavbarMain scrollPosition={scrollPosition} />
            <SocialIcon/>
            <Routes>
        <Route path="/" element={<Home scrollPosition={scrollPosition} />} />
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
{/* <Aos/> */}
    </div>
  );
}

export default App;
