import { useState, useEffect } from "react";
import { useDispatch,useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Alert,Dropdown, Modal } from "react-bootstrap";
import { add } from '../store/cardSlice';
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";
import { Link } from 'react-router-dom';
import { Button as BootstrapButton,Toast } from 'react-bootstrap';
// import ProductDetail from "./ProductDetail";
import ReactPaginate from 'react-paginate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "@emotion/react";
import axios from 'axios';
import loadingGif from '../assets/img.gif'; 


import "../Style.css";

const Product = () => {
  const dispatch = useDispatch();
  const{data: products,status}=useSelector(state => state.products);
  // const [products, getProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const itemsPerPage =8;
  const isAddedToCart = (productId) => cardProducts.some((product) => product.id === productId);
  const cardProducts = useSelector((state) => state.cart);
  const [selectedProduct, setSelectedProduct] = useState(null); // Track the selected product
 
  const [showToast, setShowToast] = useState(false);
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
  
  useEffect(() => {
    dispatch(getProducts());
    setSelectedCategory('');
  }, [dispatch]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/fetchproduct');
        dispatch(getProducts(response.data));
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    setSelectedCategory('');
  }, [dispatch]);
 
  useEffect(() => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    // Check if products.data is an array before filtering
    const filtered = Array.isArray(products) ? products.filter((product) =>
      product.title && product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || product.category === selectedCategory)
    ) : [];
  
    setFilteredProducts(filtered.slice(startIndex, endIndex));
  }, [products, searchTerm, selectedCategory, currentPage, itemsPerPage]);
  
  
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
 

  if(status===StatusCode.LOADING){
    return (
      <div className="loading-container">
       <img src={loadingGif} alt="Loading..." />
        <p>Loading</p>
      </div>
    );
  }
  if(status===StatusCode.ERROR){
    return<Alert key="danger" variant="danger">something went wrong!Try again later</Alert>
  }
  console.log("Products in Product Component:", products);

  const addToCard =(product) => { 
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex((item) => item.id === product.id);
   

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update its quantity
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      // If the product is not in the cart, add it with quantity 1
      updatedCart.push({ ...product, quantity: 1 });
    }
    dispatch(add(product));
    setCart(updatedCart);
    // // dispatch(add(updatedCart));
    // dispatch(add([...cardProducts, { ...product, quantity: selectedQuantity }]));
    // dispatch(add({ ...product, quantity: 1 }));
    setShowAlert(true);
    setSelectedProduct(product); 
    setShowToast(true);
    // toast.success(`Added to Cart: ${product.title}`, {
      toast.success(` Item Added to Cart`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
   
  };
  const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];
   
  const cards =filteredProducts.map(product => (
    
    <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <Card className=" card__one h-100 mx-auto">
        {/* <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} /> */}
        <Link to={`/dashboard/product/${product.id}`}className="d-flex justify-content-center align-items-center">
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px', objectFit: 'cover', padding:'10px' }} />
        </Link>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>Price: INR {Math.floor(product.price*50).toLocaleString('en-IN')}</Card.Text>
          <div className="mt-2">Quantity: {cart.find(item => item.id === product.id)?.quantity || 0}</div>
        </Card.Body>
        <Card.Footer style={{ background: 'white' }} className="text-center">
          <Button
            variant="primary"
            onClick={() => addToCard(product)}
            className={`button-gradient ${isAddedToCart(product.id) ? 'disabled' : ''}`}
            disabled={isAddedToCart(product.id)}
          >
            {isAddedToCart(product.id) ? 'Added' : 'Add To Cart'}
          </Button>
          {/* <div className="mt-2">Quantity: {cart.find(item => item.id === product.id)?.quantity || 0}</div> */}
        </Card.Footer>
      </Card>
    </div>
  ));
  
  return (
    
    // <>
    //   <h1>Product Dashboard</h1>
    //   <div className="row">
    //     {cards}
    //   </div>
    // </>
    <div className="container">
    
      <h1 className="text-center mb-4">Product Dashboard</h1>
      {/* <div className="mb-3 text-center">
        <input
          type="text"
          value={searchTerm}  
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Products..."
        />
      </div> */}
      <div className="search-bar-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
          placeholder="Search Products..."
        />
        {/* <BsSearch className="search-icon" size={20} /> */}
      </div>
      <div className="mb-3 d-flex justify-content-center">
      <Dropdown onSelect={(category) => setSelectedCategory(category)} style={{ marginBottom: '20px'}}>
        <Dropdown.Toggle variant="primary" id="categoryDropdown" style={{ backgroundColor: '#627f97' }}>
          {selectedCategory === '' ? 'All Categories' : selectedCategory}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item eventKey="">All Categories</Dropdown.Item>
          {categories.map((category, index) => (
            <Dropdown.Item key={index} eventKey={category}>
              {category}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      </div>
      <ToastContainer />
      {filteredProducts.length === 0 ? (
        <Alert key="warning" variant="warning">
          No matching products found.
        </Alert>
      ) : (
        <div>
        <div className="row justify-content-center">{cards}</div>
    
          <ReactPaginate
           previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(products.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
/>
        </div>  
      )}  
    </div>    
  );
}
export default Product;

