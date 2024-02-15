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




// import React, { useState } from 'react';
// import { Form, Button, Container } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { useForm } from "react-hook-form";
// import "../login.css";


// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const [passwordShown, setPasswordShown] = useState(false);
//   const togglePasswordVisibility = () => {
//     setPasswordShown(!passwordShown);
//   };
//   const { register, handleSubmit } = useForm();
//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:8081/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });
//       const responseData = await response.json();
//       console.log(responseData);
//       if (response.ok) {
//         // Successful login
//         console.log("login sucessfully")
//         navigate('/product');
//       } else {
//         console.error('Login failed');
//         setError('Login failed. Please check your credentials.');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       setError('Error during login. Please try again later.');
//     }
//   };

//   return (
//     <div className="login">
//       <div className="form">
//         <form onSubmit={handleLogin} noValidate>
//           <span>Login</span>

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter email id / username"
//             className="form-control inp_text"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <div className="pass-wrapper">
//           <div className="password-input">
//           <input
//             // type="password
//             type={passwordShown ? "text" : "password"}
//             name="password"
//             placeholder="Enter password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           {/* <FontAwesomeIcon
//               icon={showPassword ? faEyeSlash : faEye}
//               onClick={() => setShowPassword(!showPassword)}
//               className="eye-icon"
//             /> */}
//             <i onClick={togglePasswordVisibility}>
//           {passwordShown ? (
//             <FontAwesomeIcon icon={faEyeSlash} />
//           ) : (
//             <FontAwesomeIcon icon={faEye} />
//           )}
//         </i>
//         </div>
//           </div>
//           <button type="submit" onClick={handleSubmit(onSubmit)}>Login</button>
//         </form>

//         <p className="mt-3">
//           Don't have an account? <Link to="/signup">Sign up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState,useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const schema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().required('Password is required').min(6, 'Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await schema.validate(data, { abortEarly: false });

      // If validation passes, proceed with login logic
      console.log(data);

      const response = await fetch('http://localhost:8081/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const responseData = await response.json();
      console.log(responseData);

      if (response.ok) {
        // Successful login
        console.log('Login successfully');
        navigate('/product');
      } else {
        console.error('Login failed');
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      // Handle validation errors
      console.error('Validation errors:', error);
      setError('Validation failed. Please check your input.');
    }
  };
  useEffect(() => {
    document.body.classList.add('login-body');
    return () => {
      document.body.classList.remove('login-body');
    };
  }, []);

  return (
    <div className="login">
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <span>Login</span>

          <input
            type="email"
            name="email"
            placeholder="Enter email id / username"
            className={`form-control inp_text ${errors.email ? 'is-invalid' : ''}`}
            id="email"
            {...register('email')}
            required
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}

          <div className="pass-wrapper">
            <div className="password-input">
              <input
                type={passwordShown ? 'text' : 'password'}
                name="password"
                placeholder="Enter password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                {...register('password')}
                required
              />
              {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
              <i onClick={togglePasswordVisibility}>
                {passwordShown ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                )}
              </i>
            </div>
          </div>

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