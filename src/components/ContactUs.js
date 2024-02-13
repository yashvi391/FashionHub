import React,{useState,useEffect}from 'react';
import { Container ,Form, Button,Alert } from 'react-bootstrap';
import { Facebook, Youtube, Twitter, Instagram } from 'react-bootstrap-icons';
// import '../ContactUs.css';
const ContactUs =() => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your logic to handle form submission
  //   console.log('Form submitted:', formData);
  //   setFormData({
  //     name: '',
  //     email: '',
  //     message: '',
  //   });
  // };
  // useEffect(() => {
  //   if (showSuccessMessage) {
  //     // Display success message for 3 seconds and then hide it
  //     const timer = setTimeout(() => {
  //       setShowSuccessMessage(false);
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [showSuccessMessage]);
  
  return (
    <Container className="contact-us-container"style={{ border: '2px solid black', padding: '20px', borderRadius: '10px', marginTop: '30px', maxWidth: '700px', background: '#D8BFD8' }}>
    <h1>Contact Us </h1>
    <p>
         Customer Support<br />
        WhatsApp us: <a href="https://wa.me/63749831779" target="_blank">63749831779</a><br />
        Email at: <a href="mailto:cs@jiomart.com">cs@fashionhub.com</a><br />
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
  </Container>
    // <Container className="contact-us-container"style={{ border: '2px solid black', padding: '20px', borderRadius: '10px',marginTop:'30px',width:'700px', background:' #D8BFD8'}}>
    //   <h1>Contact Us</h1>
    //   <Form onSubmit={handleSubmit}>
    //     <Form.Group className="mb-3" controlId="formName">
    //       {/* <Form.Label>Name</Form.Label> */}
    //       <Form.Control
    //         type="text"
    //         placeholder="Enter your name"
    //         name="name"
    //         value={formData.name}
    //         onChange={handleChange}
    //         required
    //         style={{ width: '50%', margin: '0 auto' }}
    //       />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formEmail">
    //       {/* <Form.Label>Email</Form.Label> */}
    //       <Form.Control
    //         type="email"
    //         placeholder="Enter your email"
    //         name="email"
    //         value={formData.email}
    //         onChange={handleChange}
    //         required
    //         style={{ width: '50%', margin: '0 auto' }}
    //       />
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formMessage">
    //       {/* <Form.Label>Message</Form.Label> */}
    //       <Form.Control
    //         as="textarea"
    //         rows={3}
    //         placeholder="message"
    //         name="message"
    //         value={formData.message}
    //         onChange={handleChange}
    //         required
    //         style={{ width: '50%', margin: '0 auto' }}
    //       />
    //     </Form.Group>
    //     <Button variant="secondary" type="submit">
    //       Submit
    //     </Button>
    //     {showSuccessMessage && (
    //       <Alert variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
    //         Message sent successfully!
    //       </Alert>
    //     )}
    //   </Form>
    //   {/* <b> <p>Keep In Touch</p></b> */}
    //     {/* Social media icons */}
    //     <div className="social-icons">
    //     <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    //       <Facebook className="icon" size={20}/>
    //     </a>
    //     <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
    //       <Youtube className="icon" size={20}/>
    //     </a>
    //     <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
    //       <Twitter className="icon" size={20} />
    //     </a>
    //     <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    //       <Instagram className="icon" size={20}/>
    //     </a>
    //   </div>
    // </Container>

  );
};

export default ContactUs;
