import { NavbarCollapse, NavbarText } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {useSelector } from 'react-redux';
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import "../Style.css";
import logo from '../assets/logo.png';
import { Bag } from 'react-bootstrap-icons'; 
const NavBar = () => {
    const cardProducts =useSelector((state) => state.cart);
    const dispatch = useDispatch();
 return(
  <>
    <Navbar expand="lg" style={{ backgroundColor: '#6495ED' }}>
        <Container fluid>
        {/* <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Fashion Shop Logo"
            height="40"
            width="60"
            className="d-inline-block align-top" 
          />{' '}
        Fashion Hub 
        </Navbar.Brand> */}
          <Navbar.Brand as={Link} to="/">
            <h3 style={{ marginBottom: 0, fontSize: '1.5rem', color: 'white' }}>
              Fashion Hub
            </h3>
            <img
              src={logo}
              alt="Fashion Shop Logo"
              height="40"
              width="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-center">
            <Nav className=" me-auto ">
              <Nav.Link to="/" as={Link} className="nav-link-hover" style={{color:"white"}}>
                Products
              </Nav.Link>
              <Nav.Link to="/contact-us" as={Link} className="nav-link-hover" style={{color:"white"}}>
                ContactUs
              </Nav.Link>
              <Nav.Link to="/about-us" as={Link} className="nav-link-hover" style={{color:"white"}}>
                AboutUs
              </Nav.Link>
              <Nav.Link to="/login" as={Link} className="nav-link-hover" style={{color:"white"}}>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link className="nav-link-custom"
                to="/card"
                as={Link}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  color: 'white',
                  transition: 'background-color 0.3s ease',
                }}
              >
                <Bag size={20} className="me-1" />
                My Bag {cardProducts.length}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navbar expand="lg" style={{ backgroundColor: '#6495ED' }}>
        <Container fluid>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Navbar.Brand as={Link} to="/">
              <h3 style={{ marginBottom: 0, fontSize: '1.5rem', color: 'white' }}>
                Fashion Hub
              </h3>
              <img
                src={logo}
                alt="Fashion Shop Logo"
                height="40"
                width="60"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>

            <Nav className="me-auto">
              <Nav.Link to="/" as={Link} className="nav-link1">
                Products
              </Nav.Link>
              <Nav.Link to="/contact-us" as={Link} className="nav-link1">
                ContactUs
              </Nav.Link>
              <Nav.Link to="/about-us" as={Link} className="nav-link1">
                AboutUs
              </Nav.Link>
              <Nav.Link to="/login" as={Link} className="nav-link1">
                Login
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link
                to="/card"
                as={Link}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  color: 'black',
                  transition: 'background-color 0.3s ease',
                }}
                onClick={handleAddToCart}
              >
                <Bag size={20} className="me-1" />
                My Bag {cardProducts.length}
                {showAddToCartModal && (
                  <div className="modal-overlay">
                    <p className="text-white text-center m-0">Item Added!</p>
                  </div>
                )}
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar> */}
      </>
 ) 
};
export default NavBar;





// import { Navbar, Container, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { Bag, House, Envelope, InfoCircle, Person } from 'react-bootstrap-icons'; // Import icons
// import { useSelector } from 'react-redux';
// import "../Style.css";
// import logo from '../assets/logo.png';

// const NavBar = () => {
//   const cardProducts = useSelector((state) => state.cart);

//   return (
//     <Navbar expand="lg" style={{ backgroundColor: '#6495ED' }}>
//       <Container fluid>
//         <Navbar.Brand as={Link} to="/">
//           <h3 style={{ marginBottom: 0, fontSize: '1.5rem', color: 'white' }}>
//             Fashion Hub
//           </h3>
//           <img
//             src={logo}
//             alt="Fashion Shop Logo"
//             height="40"
//             width="60"
//             className="d-inline-block align-top"
//           />
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

//         <Navbar.Collapse className="justify-content-center">
//           <Nav className="me-auto">
//             <Nav.Link to="/" as={Link} className="nav-link1">
//               <div className="d-flex align-items-center">
//                 <House size={20} className="me-1" />
//                 Products
//               </div>
//             </Nav.Link>
//             <Nav.Link to="/contact-us" as={Link} className="nav-link1">
//               <div className="d-flex align-items-center">
//                 <Envelope size={20} className="me-1" />
//                 ContactUs
//               </div>
//             </Nav.Link>
//             <Nav.Link to="/about-us" as={Link} className="nav-link1">
//               <div className="d-flex align-items-center">
//                 <InfoCircle size={20} className="me-1" />
//                 AboutUs
//               </div>
//             </Nav.Link>
//             <Nav.Link to="/login" as={Link} className="nav-link1">
//               <div className="d-flex align-items-center">
//                 <Person size={20} className="me-1" />
//                 Login
//               </div>
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>

//         <Navbar.Collapse className="justify-content-end">
//           <Nav>
//             <Nav.Link
//               to="/card"
//               as={Link}
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 position: 'relative',
//                 color: 'black',
//                 transition: 'background-color 0.3s ease',
//               }}
//             >
//               <Bag size={20} className="me-1" />
//               My Bag {cardProducts.length}
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;
