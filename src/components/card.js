import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { remove, increment, decrement } from "../store/cardSlice";
import { Plus, Dash, Trash } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import InvoiceReceipt from "./InvoiceReceipt";

const Cart = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // const [showInvoice, setShowInvoice] = useState(false);

  const handleBuyNow = () => {
    navigate("/invoice");
  };

  const incrementQuantity = (productId) => {
    dispatch(increment(productId));
  };

  const decrementQuantity = (productId) => {
    dispatch(decrement(productId));
  };

  const removeToCart = (productId) => {
    dispatch(remove(productId));
  };

  const calculateItemTotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateTotal = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const cards = products.map((product) => (
    
    <div className="col-md-3 mb-5 mt-4" key={product.id}>
      <Card className="h-100">
        <Card.Body >
        <Card.Img
          variant="top"
          src={product.image}
          style={{ width: "100px", height: "130px",objectFit:"cover" }}
        />
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
          <Card.Text>Quantity: {product.quantity}</Card.Text>
          <Card.Text>
            Item Total: {calculateItemTotal(product.price, product.quantity)}
          </Card.Text>
          <Card.Footer style={{ background: "white" }}>
            <Button
              variant=""
              onClick={() => incrementQuantity(product.id)}
            >
             <Plus size={20} />
            </Button>{" "}
            <Button
              variant=""
              onClick={() => decrementQuantity(product.id)}
              disabled={product.quantity === 1}
            >
              <Dash size={20} />
            </Button>{" "}
            <Button
              variant="danger"
              onClick={() => removeToCart(product.id)}
            >
              <Trash size={20} />
            </Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  ))

 return (
    <>
    <div className="container-fluid">
      <div className="row">{cards}</div>
      <div>
        <h4>Total: INR {calculateTotal()}</h4>
        <Button variant="primary" onClick={handleBuyNow}>
          Buy Now
        </Button>
      </div>
      {/* {showInvoice && <InvoiceReceipt />} */}
      </div>
    </>
  );
};
export default Cart;

