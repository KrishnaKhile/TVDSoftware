import React from "react";
import logo from "./TVD_LOGO.png";
import {FaBars,FaArrowUp} from "react-icons/fa";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useLocation } from "react-router-dom";
const NavbarMain = () => {
  const location = useLocation();
  return (
    <>
      {/* {["lg"].map((expand) => (
        <Navbar
          classNameName="navbar-main"
          collapseOnSelect
          key={expand}
          expand={expand}
        >
          <Container>
            <Navbar.Brand href="#home">
              <img
                style={{ height: "30px", marginRight: "6px" }}
                src={logo}
                alt="LOGO"
              ></img>
              TVD SOFTWARE
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    style={{ height: "30px", marginRight: "5px" }}
                    src={logo}
                    alt="LOGO"
                  ></img>
                  TVD Software
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body classNameName="justify-content-end">
                <Nav as="ul">
                  <Nav.Item as="li">
                    <Nav.Link
                      classNameName={location.pathname === "/" ? "active" : ""}
                      as={Link}
                      to="/"
                    >
                      Home
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      classNameName={
                        location.pathname === "/careers" ? "active" : ""
                      }
                      as={Link}
                      to="/careers"
                    >
                      Careers
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item as="li">
                    <Nav.Link
                      classNameName={location.pathname === "/about" ? "active" : ""}
                      as={Link}
                      to="/about"
                    >
                      About Us
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      classNameName={
                        location.pathname === "/contact-us" ? "active" : ""
                      }
                      as={Link}
                      to="/contact-us"
                    >
                      Contact Us
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} */}

<header id="header" className="header fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <a href="/" className="logo d-flex align-items-center">
        <img src={logo} alt="" />
        <span>TVD SOFTWARE</span>
      </a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><Link  className={location.pathname === "/" ? "nav-link scrollto active" : "nav-link scrollto"} to="/">Home</Link></li>
          <li><Link className={location.pathname === "/careers" ? "nav-link scrollto active" : "nav-link scrollto"}  to="/careers">Careers</Link></li>
          <li><a className="nav-link scrollto" href="/">About Us</a></li>
          <li><a className="nav-link scrollto" href="/">Contact Us</a></li>
          {/* <li><a className="nav-link scrollto" href="">Team</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a className="nav-link scrollto" href="">Contact</a></li> */}
          
        </ul> 
        <FaBars className="bi mobile-nav-toggle bi-list"/>
      </nav>

    </div>
  </header>
      <hr style={{ marginTop: "1px" }} />
      <a href="/" class="back-to-top d-flex align-items-center justify-content-center"><i><FaArrowUp/></i></a>
    </>
  );
};

export default NavbarMain;

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function NavbarMain() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           {/* <img
//                     style={{ display: { xs: 'none', md: 'flex' }, mr: 1,height: "30px", marginRight: "5px" }}
//                     src={logo}
//                   ></img> */}
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             TVD Software
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             TVD Software
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default NavbarMain;
