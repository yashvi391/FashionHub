// import React, { useState } from 'react';
// import { Form, Button, Container } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';

// const SignUp =()=> {
//     const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     // Add your user registration logic here
//     // For a simple example, always redirect to the main page after signup
//     navigate('/');
//   };
//   return (
//     <Container className="mt-5">
//       <h2>Sign Up</h2>
//       <Form onSubmit={handleSignup}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formConfirmPassword">
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Sign Up
//         </Button>

//         <p className="mt-3">
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </Form>
//     </Container>
//   );
// };

// export default SignUp;
// import React, { useState } from 'react';
// import { Form, Button, Container } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     // Check if passwords match
//     if (password !== confirmPassword) {
//       console.error('Passwords do not match');
//       return;
//     }

//   //   try {
//   //     const response = await fetch('http://localhost:8000/signup', {
//   //       mode: 'no-cors',
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({
//   //         email,
//   //         password,
//   //       }),
//   //     });

//   //     if (response.ok) {
//   //       console.log('Signup successful!');
//   //       navigate('/login'); 
//   //     } else {
//   //       // Handle failed signup (display error message, etc.)
//   //       const errorData = await response.json();
//   //       console.error('Signup failed:', errorData.message || 'Unknown error');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error during signup:', error);
//   //   }
  
//   // };
//   try {
//     const response = await fetch('http://localhost:3000/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });

//     if (response.ok) {
//       console.log('Signup successful!');
//       navigate('/login',true); 
//     } else {
//       // Check if response has a body before attempting to parse JSON
//       const contentType = response.headers.get('content-type');
//       if (contentType && contentType.includes('application/json')) {
//         const errorData = await response.json();
//         console.error('Signup failed:', errorData.message || 'Unknown error');
//       } else {
//         console.error('Signup failed: Invalid JSON response');
//       }
//     }
//   } catch (error) {
//     console.error('Error during signup:', error);
//   }
// };
//   return (
//     <Container className="mt-5">
//       <h2>Sign Up</h2>
//       <Form onSubmit={handleSignup}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formConfirmPassword">
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Sign Up
//         </Button>

//         <p className="mt-3">
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </Form>
//     </Container>
//   );
// };
// export default SignUp;

import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import "../Signup.css";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:8081/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          confirm_password: confirmPassword,
        }),
      });

      if (response.ok) {
        console.log('Signup successful!');
        navigate('/login', true);
      } else {
        // Check if response has a body before attempting to parse JSON
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          console.error('Signup failed:', errorData.message || 'Unknown error');
        } else {
          console.error('Signup failed: Invalid JSON response');
        }
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="signup">
      <div className="form">
        <form onSubmit={handleSignup}>
          <span>Sign Up</span>

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="form-control inp_text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <p className="mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
