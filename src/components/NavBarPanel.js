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
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        {/* {searchTerm && (
            <Dropdown align="end" className="mt-1">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Search Results
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {allProducts.map((product) => (
                  <Dropdown.Item key={product.id}>{product.title}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )} */}
        {/* <div class="container text-center">
        <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search Products" aria-label="Search" 
      value={searchTerm} onChange={handleSearchChange}
      />

      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div> */}
          <Nav>
            <Nav.Link to="/card" as={Link}>
            <Bag size={20} className="me-1" />
              My Bag {cardProducts.length}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* {status === StatusCode.LOADING && <p>Loading....</p>}
      {status === StatusCode.ERROR && (
        <Alert key="danger" variant="danger">
          Something went wrong! Try again later
        </Alert>
      )} */}

      {/* {searchTerm && (
        <div className="container mt-2">
          <h5>Search Results</h5>
          <ul className="list-unstyled">
          {filteredProducts.map((product) => (
            <p key={product.id}>{product.title}</p>
          ))}
          </ul>
        </div>
      )} */}
      {/* {searchTerm && (
        <Dropdown align="end" className="mt-1">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {allProducts.map((product) => (
              <Dropdown.Item key={product.id}>{product.title}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      )} */}
    </Navbar>
    
 )
};
export default NavBar

