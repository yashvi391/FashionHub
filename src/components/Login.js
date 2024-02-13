// import React, { useState } from 'react';

// import { Form, Button, Container } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// const Login =()=> {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async(e) => {
//     e.preventDefault();
//     // Add your authentication logic here
//     // For a simple example, always redirect to the main page on login
//     // navigate('/');
//     try {
//       const response = await fetch('http://localhost:3001/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       if (response.ok) {
//         // Successful login
//         navigate('/');
//       } else {
//         // Handle failed login (display error message, etc.)
//         console.error('Login failed');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };
//   }; 
//   return (
//     <Container className="mt-5">
//       <h2>Login</h2>
//       <Form onSubmit={handleLogin}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label></Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label></Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Login
//         </Button>

//         <p className="mt-3">
//           Don't have an account? <Link to="/signup">Sign up</Link>
//         </p>
//       </Form>
//     </Container>
   
//   );
// };
// export default Login;




import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import "../login.css";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8081/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const responseData = await response.json();
      console.log(responseData);
      if (response.ok) {
        // Successful login
        console.log("loginnn")
        navigate('/product');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login">
      <div className="form">
        <form onSubmit={handleLogin} noValidate>
          <span>Login</span>

          <input
            type="email"
            name="email"
            placeholder="Enter email id / username"
            className="form-control inp_text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="mt-3">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
