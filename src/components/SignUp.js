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

// import React, { useState } from 'react';
// import { Form, Button, Container } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import "../Signup.css";

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

//     try {
//       const response = await fetch('http://localhost:8081/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//           confirm_password: confirmPassword,
//         }),
//       });

//       if (response.ok) {
//         console.log('Signup successful!');
//         navigate('/login', true);
//       } else {
//         // Check if response has a body before attempting to parse JSON
//         const contentType = response.headers.get('content-type');
//         if (contentType && contentType.includes('application/json')) {
//           const errorData = await response.json();
//           console.error('Signup failed:', errorData.message || 'Unknown error');
//         } else {
//           console.error('Signup failed: Invalid JSON response');
//         }
//       }
//     } catch (error) {
//       console.error('Error during signup:', error);
//     }
//   };

//   return (
//     <div className="signup">
//       <div className="form">
//         <form onSubmit={handleSignup}>
//           <span>Sign Up</span>

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter email"
//             className="form-control inp_text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             className="form-control"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />

//           <button type="submit">Sign Up</button>
//         </form>

//         <p className="mt-3">
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
import React, { useState,useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import "../Signup.css";

const SignUp = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      // Check if passwords match
      if (values.password !== values.confirmPassword) {
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
            email: values.email,
            password: values.password,
            confirm_password: values.confirmPassword,
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
    },
  });
  useEffect(() => {
    // Add the class to the body element when the component mounts
    document.body.classList.add('signup-body');

    // Remove the class from the body element when the component unmounts
    return () => {
      document.body.classList.remove('signup-body');
    };
  }, []);

  return (
    <div className="signup">
      <div className="form">
        <form onSubmit={formik.handleSubmit}>
          <span>Sign Up</span>

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className={`form-control inp_text ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.email && formik.errors.email && <div className="invalid-feedback">{formik.errors.email}</div>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.password && formik.errors.password && <div className="invalid-feedback">{formik.errors.password}</div>}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className={`form-control ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'is-invalid' : ''}`}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="invalid-feedback">{formik.errors.confirmPassword}</div>
          )}

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
