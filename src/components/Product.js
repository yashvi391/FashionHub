import { useState, useEffect } from "react";
import { useDispatch,useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Alert,Dropdown} from "react-bootstrap";
import { add } from '../store/cardSlice';
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";
import { Link } from 'react-router-dom';
// import ProductDetail from "./ProductDetail";

import "../Style.css";

const Product = () => {
  const dispatch = useDispatch();
  const{data: products,status}=useSelector(state => state.products);
  // const [products, getProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
    setSelectedCategory('');
  }, [dispatch]);
  
  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || product.category === selectedCategory)
      )
    );
  }, [products, searchTerm,selectedCategory]);
  
  if(status===StatusCode.LOADING){
    return <p>Loading....</p>
  }
  if(status===StatusCode.ERROR){
    return<Alert key="danger" variant="danger">something went wrong!Try again later</Alert>
  }
  console.log("Products in Product Component:", products);

  const addToCard =(product) => { 
    // dispatch an add action for fetchProducts
    dispatch(add(product));
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
          {/* <Card.Text>{product.description}</Card.Text> */}
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: 'white' }} className="text-center">
          {/* <div>
            <Card.Text>Price: INR {product.price}</Card.Text>
          </div> */}
          <Button variant="primary" onClick={() => addToCard(product)} className="button-gradient">
            Add To Cart
          </Button>
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
      <div className="mb-3">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Products..."
        />
      </div>
      <Dropdown onSelect={(category) => setSelectedCategory(category)} style={{ marginBottom: '20px'}}>
        <Dropdown.Toggle variant="primary" id="categoryDropdown" style={{ backgroundColor: 'purple' }}>
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
      {filteredProducts.length === 0 ? (
        <Alert key="warning" variant="warning">
          No matching products found.
        </Alert>
      ) : (
        <div className="row justify-content-center">{cards}</div>
      )}
    </div>
  );
}
export default Product;

