import { NavbarCollapse, NavbarText } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {useSelector } from 'react-redux';
// import { useState, useEffect } from 'react';
// import { Dropdown } from 'react-bootstrap';
// import { Alert } from 'react-bootstrap';
// import StatusCode from '../utils/StatusCode';
import logo from '../assets/logo.png';
import { Bag } from 'react-bootstrap-icons'; 
const NavBar = () => {
    const cardProducts =useSelector((state) => state.cart);
  //   const productsState = useSelector((state) => state.products);
  // const { data: allProducts, status } = productsState;
  // const [searchTerm, setSearchTerm] = useState('');
  // const [filteredProducts, setFilteredProducts] = useState([]);

  // useEffect(() => {
  //   setFilteredProducts(
  //     allProducts.filter((product) =>
  //       product.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     )
  //   );
  // }, [allProducts, searchTerm]);

  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

 return(
    <Navbar expand="lg" style={{ backgroundColor: '#DC84F3' }}>
      <Container fluid>
      <Navbar.Brand href="#">
          <img
            src={logo}
            alt="Fashion Shop Logo"
            height="40"
            width="60"
            className="d-inline-block align-top" 
          />{' '}
        Fashion Hub 
        </Navbar.Brand>
  
        {/* <Navbar.Brand href="#">Fashion Shop</Navbar.Brand> */}
        <Nav>
          <Nav.Link to="/" as={Link}>
            Products
          </Nav.Link>
          <Nav.Link to="/contact-us" as={Link}>
           ContactUs
          </Nav.Link>
          <Nav.Link to="/about-us" as={Link}>
            AboutUs
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
       
          <Nav>
            <Nav.Link to="/card" as={Link}>
            <Bag size={20} className="me-1" />
              My Bag {cardProducts.length}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    
 )
};
export default NavBar

