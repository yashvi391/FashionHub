// import React,{useState,useEffect}from 'react';
// import { Container ,Form, Button,Alert } from 'react-bootstrap';
// import { Facebook, Youtube, Twitter, Instagram } from 'react-bootstrap-icons';
// // import '../ContactUs.css';
// import contactUsImage from '../assets/contactus.jpg';
// const ContactUs =() => {
  
//   return (
//     <Container className="contact-us-container"style={{ border: '2px solid black', padding: '20px', borderRadius: '10px', marginTop: '30px', maxWidth: '700px', background: '#D8BFD8' }}>
//     <h1>Contact Us </h1>

//     <p>
//          Customer Support<br />
//         WhatsApp us: <a href="https://wa.me/63749831779" target="_blank">63749831779</a><br />
//         Email at: <a href="mailto:cs@jiomart.com">cs@fashionhub.com</a><br />
//         Call on: <a href="tel:6583463189">6583463189</a><br />
//         8:00 AM to 8:00 PM, 365 days
//       </p>
//       <div className="social-icons">
//         <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
//           <Facebook className="icon" size={20} />
//         </a>
//         <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
//           <Youtube className="icon" size={20} />
//         </a>
//         <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
//           <Twitter className="icon" size={20} />
//         </a>
//         <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
//           <Instagram className="icon" size={20} />
//         </a>
//       </div>
//   </Container>
    

//   );
// };

// export default ContactUs;
import React from 'react';
import { Container } from 'react-bootstrap';
import { Facebook, Youtube, Twitter, Instagram } from 'react-bootstrap-icons';
// import '../ContactUs.css'; // Make sure to adjust the path to your CSS file
import contactUsImage from '../assets/background2.jpg'; 

const ContactUs = () => {
  const containerStyle = {
    // border: '2px solid black',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '70px',
    maxWidth: '700px',
    margin: '70px auto', 
    textAlign: 'center', 
    backgroundImage: `url(${contactUsImage})`, // Background image
    backgroundSize: 'cover', // Make sure the image covers the container
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat', // Do not repeat the image
    color: 'black', // Text color on top of the background
  };

  return (
    <div className="contact-us-container" style={containerStyle}>
      <div className="contact-us-content">
        <h1>Contact Us</h1>
        <p>
          Customer Support<br />
          WhatsApp us: <a href="https://wa.me/63749831779" target="_blank" rel="noopener noreferrer">63749831779</a><br />
          Email at: <a href="mailto:cs@fashionhub.com">cs@fashionhub.com</a><br />
          Call on: <a href="tel:6583463189">6583463189</a><br />
          8:00 AM to 8:00 PM, 365 days
        </p>
        <div className="social-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <Facebook className="icon" size={20} />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <Youtube className="icon" size={20} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <Twitter className="icon" size={20} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Instagram className="icon" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
