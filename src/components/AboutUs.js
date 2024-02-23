import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import { Facebook, Youtube, Twitter, Instagram } from 'react-bootstrap-icons';
import AboutUsImage from '../assets/About as.jpg';
import '../AboutUs.css';

const AboutUs=()=> {
  return (
    <div className="about-us-container text-center">
      <Container>
      <Row>
          <Col>
            <h1 className="about-us-heading">Fashion Hub: Where Style Meets Innovation</h1>
            <img src={AboutUsImage} alt="Fashion Hub Logo" className="logo-image" />
            <p className="about-us-description">
              Welcome to Fashion Hub, your one-stop shop for all things fashion, where the latest trends meet cutting-edge technology. We're not just an e-commerce platform – we're your personal style concierge, passionate about connecting you with the perfect outfit, the hottest accessories, and the confidence to express yourself uniquely.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="about-us-subheading">Our Story:</h4>
            <p className="about-us-description">
              Our journey began with a simple belief: everyone deserves to feel incredible in their own skin. But navigating the ever-changing landscape of fashion could be overwhelming. That's when Fashion Hub was born. We built an online haven where style discovery is effortless, choices are endless, and shopping is an adventure.
            </p>
          </Col>
        </Row>
        <Row className="what-we-do-container">
          <Col>
            <h4 className="what-we-do-heading">What We Do:</h4>
            <p className="what-we-do-description">
              Curated Collections: We handpick trendy pieces from renowned brands and talented independent designers, catering to every taste and budget. Discover statement styles, timeless essentials, and hidden gems – all brought together with an expert eye for what's hot and what's next.
            </p>
            <p className="what-we-do-description">
              Personalized Experience: Our intelligent recommendation engine learns your preferences and suggests outfits that fit your mood, style, and body type. No more endless scrolling – let us guide you to your perfect match.
            </p>
            <p className="what-we-do-description">
              Seamless Shopping: We make online shopping a breeze. Enjoy a user-friendly interface, secure payment options, and lightning-fast deliveries. Track your orders in real-time and return policies with a smile.
            </p>
            <p className="what-we-do-description">
              More Than Shopping: Fashion Hub is a community. Stay inspired with our blog bursting with style tips, trend spotlights, and interviews with industry insiders. Join our social media channels to connect with fellow fashion enthusiasts and share your unique flair.
            </p>
          </Col>
        </Row>
        <Row className="our-values-container">
          <Col>
            <h4 className="our-values-heading">Our Values:</h4>
            <p className="our-values-description">
              <li><b>Inclusivity:</b></li>We believe fashion is for everyone. We offer a diverse range of sizes, styles, and price points, ensuring everyone finds their perfect fit.
            </p>
            <p className="our-values-description">
              <li><b>Sustainability:</b></li> We're committed to ethical and eco-conscious practices. Look for our green badges to discover sustainable brands and eco-friendly products.
            </p>
            <p className="our-values-description">
              <li><b>Community:</b></li> We believe in the power of connection. Fashion Hub is your space to express yourself, learn from others, and celebrate individual style.
            </p>
          </Col>
        </Row>
       <b> <p>Keep In Touch</p></b>
        {/* Social media icons */}
        <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <Facebook className="icon" size={40}/>
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <Youtube className="icon" size={40}/>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <Twitter className="icon" size={40} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <Instagram className="icon" size={40}/>
        </a>
      </div>
      </Container>
    </div>
  )
}

export default AboutUs;
