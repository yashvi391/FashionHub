import { useState, useEffect } from "react";
import { useDispatch,useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Alert,Dropdown} from "react-bootstrap";
import { add } from '../store/cardSlice';
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";
import { Link } from 'react-router-dom';
import { Button as BootstrapButton,Toast } from 'react-bootstrap';
// import ProductDetail from "./ProductDetail";
import ReactPaginate from 'react-paginate';
import { BsCheck } from 'react-icons/bs'; 

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
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Track the selected product
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
    setSelectedCategory('');
  }, [dispatch]);
  
  // const handleQuantityChange = (change) => {
  //   setSelectedQuantity((prevQuantity) => Math.max(prevQuantity + change, 0));
  // };

  // useEffect(() => {
  //   setFilteredProducts(
  //     products.filter((product) =>
  //     product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
  //     (selectedCategory === '' || product.category === selectedCategory)
  //     )
  //   );
  // }, [products, searchTerm,selectedCategory]);
  // useEffect(() => {
  //   const startIndex = (currentPage - 1) * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;
  //   const filtered = products.filter((product) =>
  //     product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
  //     (selectedCategory === '' || product.category === selectedCategory)
  //   );
  //   setFilteredProducts(filtered.slice(startIndex, endIndex));
  // }, [products, searchTerm, selectedCategory, currentPage, itemsPerPage]);
  useEffect(() => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || product.category === selectedCategory)
    );
    setFilteredProducts(filtered.slice(startIndex, endIndex));
  }, [products, searchTerm, selectedCategory, currentPage, itemsPerPage]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  if(status===StatusCode.LOADING){
    return <p>Loading....</p>
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
    // toast.success("Item added to cart successfully!"); 
  //   const updatedCart = [...cardProducts];
  // const existingProduct = updatedCart.find((item) => item.id === product.id);

  // if (existingProduct) {
  //   // If the product is already in the cart, update its quantity
  //   existingProduct.quantity += 1;
  // } else {
  //   // If the product is not in the cart, add it with quantity 1
  //   updatedCart.push({ ...product, quantity: 1 });
  // }
  //   const updatedCart = [...cardProducts];
  // const existingProductIndex = updatedCart.findIndex((item) => item.id === product.id);

  // if (existingProductIndex !== -1) {
  //   // If the product is already in the cart, update its quantity
  //   updatedCart[existingProductIndex].quantity += 1;
  // } else {
  //   // If the product is not in the cart, add it with quantity 1
  //   updatedCart.push({ ...product, quantity: 1 });
  // }
    // dispatch an add action for fetchProducts
    dispatch(add(product));
    setCart(updatedCart);
    // // dispatch(add(updatedCart));
    // dispatch(add([...cardProducts, { ...product, quantity: selectedQuantity }]));
    // dispatch(add({ ...product, quantity: 1 }));
    setShowAlert(true);
    setSelectedProduct(product); 
    setShowToast(true);

  }
  const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];
   
  const cards =filteredProducts.map(product => (
    
    <div className="col-md-3 mb-5" key={product.id}>
      <Card className=" card__one h-100 mx-auto">
        {/* <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} /> */}
        <Link to={`/product/${product.id}`}>
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
        </Link>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          {/* <Card.Text>Quantity: {product.quantity||0}</Card.Text> */}
          {/* <Card.Text>{product.description}</Card.Text> */}
          <Card.Text>Price: INR {Math.floor(product.price*50).toLocaleString('en-IN')}</Card.Text>

        </Card.Body>
        <Card.Footer style={{ background: 'white' }} className="text-center">
          {/* <div>
            <Card.Text>Price: INR {product.price}</Card.Text>
          </div> */}
          {/* <Button variant="primary" onClick={() => addToCard(product)} className="button-gradient">
            Add To Cart 
          </Button> */}
          <Button
            variant="primary"
            onClick={() => addToCard(product)}
            className={`button-gradient ${isAddedToCart(product.id) ? 'disabled' : ''}`}
            disabled={isAddedToCart(product.id)}
          >
            {isAddedToCart(product.id) ? 'Added' : 'Add To Cart'}
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  // function convert_to_rupees(product_price) {
  //   // Assuming the current exchange rate is 74.5 INR per USD (as of 2024-02-04).
  //   const exchange_rate = 74.5;
  
  //   // Convert to rupees and round to two decimal places.
  //   const rupee_price = round(product_price * exchange_rate, 2);
  
  //   return rupee_price;

  return (
    
    // <>
    //   <h1>Product Dashboard</h1>
    //   <div className="row">
    //     {cards}
    //   </div>
    // </>
    <div className="container">
    
      <h1 className="text-center mb-4">Product Dashboard</h1>
      <div className="mb-3">
        <input
          type="text"
          value={searchTerm}  
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Products..."
        />
      </div>
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
      {/* <Modal show={showAddToCartModal} onHide={() => setShowAddToCartModal(false)}>
        <Modal.Header closeButton>
           <Modal.Title>{selectedProduct ? `Added to Cart: ${selectedProduct.title}` : 'Added too Cart'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Product has been added to your cart.
        </Modal.Body>
        <Modal.Footer>
          <BootstrapButton variant="secondary" onClick={() => setShowAddToCartModal(false)}>
            Close
          </BootstrapButton>
        </Modal.Footer>
      </Modal> */}
      {/* {showAlert && (
        <Alert key="success" variant="success" onClose={() => setShowAlert(false)} dismissible>
          Product added to cart successfully!
        </Alert>
      )} */}
      {/* <Form.Group controlId="categoryFilter">
        <Form.Label>Filter by Category:</Form.Label>
        <Form.Control as="select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Products..." className="mb-3"
      /> */}
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000} // Adjust the delay as needed
        autohide
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          background: '#28a745',
          color: 'white',
        }}
      >
      <Toast.Header closeButton={false} style={{ color: 'black' }}>
    <BsCheck size={20} style={{ marginRight: '5px' }} />  {/* Checkmark icon */}
    <strong className="mr-auto"> Item Added successfully</strong>
  </Toast.Header>
        <Toast.Body>{selectedProduct ? `Added to Cart: ${selectedProduct.title}` : 'Added to Cart'}</Toast.Body>
      </Toast>
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

