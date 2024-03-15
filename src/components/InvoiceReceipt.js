// // InvoiceReceipt.js
// import React from "react";
// import { useSelector } from "react-redux";
// import { Card, Col, Container, Table, Button } from "react-bootstrap";
// import { useState } from "react";
// import { Row } from "react-bootstrap";
// // import firebase from 'firebase/app';
// // import 'firebase/messaging';

// // import { Twilio } from 'twilio';

// const InvoiceReceipt = () => {
//   const products = useSelector((state) => state.cart);
//   const [isOrderPlaced, setOrderPlaced] = useState(false);
//   // const [phoneNumber, setPhoneNumber] = useState('');

//   const calculateItemTotal = (price, quantity) => {
//     return price * quantity;
//   };

//   const calculateTotal = () => {
//     return products.reduce(
//       (total, product) => total + product.price * product.quantity,
//       0
//     );
//   };
//   const currentDate = new Date();
//   const formattedDate = `${currentDate.toLocaleDateString()}`;
//   //   // Replace with your Fast2SMS API key and other required parameters
//   //   const apiKey = "vw5RYuL9CrgaxsdXjbeoNQJZfhIH7O1KylzWTM4BpiF8G3SqVnycvqxgr2VTjeRiWBJGwLkMUuSmKY6I";
//   //   const phoneNumber = "8320679144";
//   //   const message = "Your order has been placed successfully!";

//   //   // const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
//   //   // const fast2smsUrl = 'https://www.fast2sms.com/dev/bulkV2';
//   //   // const url = `${corsAnywhereUrl}${fast2smsUrl}`;
//   //   const serverUrl = "http://localhost:3000/send-sms";

//   //   const headers = {
//   //     // 'Authorization': apiKey,
//   //     'Content-Type': 'application/json',
//   //     // 'Origin': corsAnywhereUrl,
//   //   };

//   //   const body = JSON.stringify({
//   //     // message: message,
//   //     // language: "english",
//   //     // route: "q",
//   //     // numbers: phoneNumber,
//   //     apiKey: apiKey,
//   //     phoneNumber: phoneNumber,...
//   //     message: message,
//   //   });
//   //   try {
//   //     const response = await fetch(serverUrl, {
//   //       method: "POST",
//   //       headers: headers,
//   //       body: body,
//   //     });

//   //     const result = await response.json();

//   //     if (result.success) {
//   //       setOrderPlaced(true);
//   //     } else {
//   //       console.error("Error sending SMS:", result.error);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error sending SMS:", error.message);
//   //   }
//   // };

//   //   try {
//   //     // Send an HTTP POST request to the Fast2SMS API
//   //     const response = await fetch(url, {
//   //       method: "POST",
//   //       headers: headers,
//   //       body: body,
//   //     });

//   //     // Check if the response is not successful
//   //     if (!response.ok) {
//   //       throw new Error(`HTTP error! Status: ${response.status}`);
//   //     }

//   //     // Parse the response as JSON
//   //     const result = await response.json();

//   //     // Check if the returned data is valid
//   //     if (result && result.return === true) {
//   //       setOrderPlaced(true);
//   //     } else {
//   //       console.error("Error sending SMS:", result.message);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error sending SMS:", error.message);
//   //   }
//   // };

//   // const handlePlaceOrder = async () => {
//   //   // Replace with your Fast2SMS API key and other required parameters
//   //   const apiKey = "vw5RYuL9CrgaxsdXjbeoNQJZfhIH7O1KylzWTM4BpiF8G3SqVnycvqxgr2VTjeRiWBJGwLkMUuSmKY6I";
//   //   const phoneNumber = "8320679144";
//   //   const message = "Your order has been placed successfully!";

//   //   // const url = ` https://www.fast2sms.com/dev/bulkV2`;
//   //   const url = `https://www.fast2sms.com/dev/bulkV2`;

//   //   const headers = {
//   //     "authorization": apiKey,
//   //     "Content-Type": "application/json",
//   //   };

//   //   const body = JSON.stringify({
//   //     message: message,
//   //     language: "english",
//   //     route: "q",
//   //     numbers: phoneNumber,
//   //   });

//   //   try {
//   //     // Send an HTTP POST request to the Fast2SMS API
//   //     const response = await fetch(url, {
//   //       method: "POST",
//   //       headers: headers,
//   //       body: body,
//   //     });

//   //     const result = await response.json();

//   //     if (result.return === true) {
//   //       setOrderPlaced(true);
//   //     } else {
//   //       console.error("Error sending SMS:", result.message);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error sending SMS:", error.message);
//   //   }
//   // };
//   // const handlePlaceOrder = async () => {
//   //   // Replace with your Twilio account SID, auth token, and Twilio phone number
//   //   const accountSid = 'AC29051604f63454a619aa228f4d73698b';
//   //   const authToken = 'acfcb9d3cfc44726b7723923e3a332fc';
//   //   const twilioPhone = '+17163359985';

//   //   const client = new Twilio(accountSid, authToken);

//   //   try {
//   //     // Replace 'your_phone_number' with your actual phone number
//   //     await client.messages.create({
//   //       body: 'Your order has been placed successfully!',
//   //       from: twilioPhone,
//   //       to: '+18320679144',
//   //     });

//   //     setOrderPlaced(true);
//   //   } catch (error) {
//   //     console.error("Error sending SMS:", error);
//   //   }
//   // };
//   // const handlePlaceOrder = async () => {
//   //   const apiKey = "1lPNdkV7k00DNhbITg3PRjwKS1ZFZJV08OLeyx0YssQ3zCEIZdQqeD98Sjx5";
//   //   const phoneNumber = "8320679144";
//   //   const message = "Your order has been placed successfully!";
  
//   //   const serverUrl = "https://www.fast2sms.com/dev/bulkV2";
  
//   //   const headers = {
//   //     'Content-Type': 'application/json',
//   //   };
  
//   //   const body = JSON.stringify({
//   //     phoneNumber: phoneNumber,
//   //     message: message,
//   //   });
  
//   //   try {
//   //     const response = await fetch(serverUrl, {
//   //       method: "POST",
//   //       headers: headers,
//   //       body: body,
//   //     });
  
//   //     const result = await response.json();
  
//   //     if (result.success === true) {
//   //       setOrderPlaced(true);
//   //     } else {
//   //       console.error("Error sending SMS:", result.error);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error sending SMS:", error.message);
//   //   }
//   // };
//   const handlePlaceOrder = () => {
//     // You can add your order placement logic here
//     // For example, send an SMS or perform other necessary actions

//     // For now, just set the order placed flag to true
//     setOrderPlaced(true);
//   };
//   // const handleSendSMS = async () => {
//   //   try {
//   //     const messaging = firebase.messaging();
//   //     await Notification.requestPermission();
//   //     const token = await messaging.getToken();

//   //     console.log('Device Token:', token);

//   //     // Now, you can send the token to your backend server
//   //     // and use it to send an SMS using a third-party service.
//   //   } catch (error) {
//   //     console.error('Error:', error);
//   //   }
//   // };

  

//   return (
//     <Container className="invoice-receipt text-center">
//       <Row>
//         <Col>
//           <h1>Invoice</h1>
//           <p>Date: {formattedDate}</p>
//         </Col>
//       </Row>

//       <Row className="justify-content-center">
//         <Col xs={12} md={8}>
//           <Card className="border border-dark">
//             <div className="card-header bg-black"></div>
//             <Card.Body>
//               <Table bordered={false} hover responsive>
//                 <thead>
//                   <tr>
//                     <th>Product </th>
//                     <th>Product Name</th>
//                     <th>Product ID</th>
//                     <th>Price (INR)</th>
//                     <th>Quantity</th>
//                     <th>Sub Total</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {products.map((product) => (
//                     <tr key={product.id}>
//                       <td>
//                         <img
//                           src={product.image}
//                           alt={product.title}
//                           style={{ width: "50px", height: "50px" }}
//                         />
//                       </td>
//                       <td>{product.title}</td>
//                       <td>{product.id}</td>
//                       <td>{product.price}</td>
//                       <td>{product.quantity}</td>
//                       <td>
//                         {calculateItemTotal(product.price, product.quantity)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </Card.Body>
//             <div className="card-footer bg-black">
//               {!isOrderPlaced && (
//                 <Button variant="success" onClick={handlePlaceOrder}>
//                   Place Order
//                 </Button>
//               )}
//               {/* {isOrderPlaced && <p>Order Placed Successfully!</p>} 
//                {!isOrderPlaced && (
//                 <Button variant="success" onClick={handlePlaceOrder}>
//                   Place Order
//                 </Button>
//               )}  */}
//               {/* <input
//         type="text"
//         placeholder="Enter phone number"
//         value={phoneNumber}
//         onChange={(e) => setPhoneNumber(e.target.value)}
//       />
//       <button onClick={handleSendSMS}>Send SMS</button> */}
//               {isOrderPlaced && (
//                 <p style={{ color: "green" }}>Order Placed Successfully!</p>
//               )}
//             </div>
//           </Card>
//         </Col>
//       </Row>
//       <Row className="justify-content-center">
//         <Col xs={12} md={8}>
//           <div className="row mt-3">
//             <div className="col">
//               <h4>Total: INR {calculateTotal()}</h4>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };
   
// export default InvoiceReceipt;
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Card, Col, Container, Table, Button } from "react-bootstrap";
import { useState } from "react";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {remove} from "../store/cardSlice";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const InvoiceReceipt = () => {
  const products = useSelector((state) => state.cart);
  const [isOrderPlaced, setOrderPlaced] = useState(false);
  const dispatch = useDispatch();

  const calculateItemTotal = (price, quantity) => {
    return price * quantity*50;
  };

  const calculateTotal = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };
  const formatToIndianCurrency = (amount) => {
    return amount.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
  };

  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleDateString()}`;

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  const handleRemoveItem = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <Container className="invoice-receipt text-center">
      <Row>
        <Col>
          <h1>Invoice</h1>
          <p>Date: {formattedDate}</p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Card className="border border-dark">
            <div className="card-header bg-black"></div>
            <Card.Body>
              <Table bordered={false} hover responsive>
                <thead>
                  <tr>
                    <th>Product </th>
                    <th>Product Name</th>
                    <th>Product ID</th>
                    <th>Price (INR)</th>
                    <th>Quantity</th>
                    <th>Sub Total</th>
                    <th>Remove</th> 
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <img
                          src={product.image}
                          alt={product.title}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </td>
                      <td>{product.title}</td>
                      <td>{product.id}</td>
                      {/* <td>{product.price}</td> */}
                      <td>{formatToIndianCurrency(product.price*50)}</td> 
                      <td>{product.quantity}</td>
                      {/* <td>
                        {calculateItemTotal(product.price, product.quantity)}
                      </td> */}
                      <td>{formatToIndianCurrency(calculateItemTotal(product.price, product.quantity))}</td> 
                      <td>
                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={() => handleRemoveItem(product.id)}
                          style={{ cursor: "pointer" }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
            <div className="card-footer bg-black">
              {!isOrderPlaced && (
                <Button variant="success" onClick={handlePlaceOrder}>
                  Place Order
                </Button>
              )}
              {isOrderPlaced && (
                <p style={{ color: "green" }}>Order Placed Successfully!</p>
              )}
            </div>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <div className="row mt-3">
            <div className="col">
            <h4>Total: {formatToIndianCurrency(calculateTotal()*50)}</h4>
              {/* <h4>Total: INR {calculateTotal()}</h4> */}
              {/* <h4>Total: INR {calculateTotal().toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</h4> */}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InvoiceReceipt;

