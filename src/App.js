
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import RootLayout from './components/RootLayout';
// import Dashboard from './components/Dashboard';
// import Card from './components/card';
// import InvoiceReceipt from './components/InvoiceReceipt';
// import ProductDetail from './components/ProductDetail';
// import AboutUs from './components/AboutUs';
// import ContactUs from './components/ContactUs';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import Product from './components/Product';
// import ResetPassword from './components/ResetPassword';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Navigate to="/login" />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/dashboard" element={<RootLayout />}>
//           <Route path="/forgot-password" element={<ResetPassword />} />
//             <Route index element={<Dashboard />} />
//             <Route path="card" element={<Card />} />
//             {/* Use relative path "card" instead of absolute path "/card" */}
//             <Route path="invoice" element={<InvoiceReceipt />} />
//             <Route path="product/:productId" element={<ProductDetail />} />
//             <Route path="about-us" element={<AboutUs />} />
//             <Route path="contact-us" element={<ContactUs />} />
//             <Route path="product" element={<Product />} />
           
//           </Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }
// export default App;


// import React, { useState,useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import RootLayout from './components/RootLayout';
// import Dashboard from './components/Dashboard';
// import Card from './components/card';
// import InvoiceReceipt from './components/InvoiceReceipt';
// import ProductDetail from './components/ProductDetail';
// import AboutUs from './components/AboutUs';
// import ContactUs from './components/ContactUs';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import Product from './components/Product';
// // import { useSelector } from 'react-redux';
// // import { useNavigate,} from 'react-router-dom'; 


// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   // const navigate = useNavigate();
//   // useEffect(() => {
//   //   // Check if the current path is different from '/dashboard/product'
//   //   // and navigate to '/dashboard/product' if needed
//   //   if (window.location.pathname !== '/dashboard/product') {
//   //     navigate('/dashboard/product');
//   //   }
//   // }, [navigate]);
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//         <Route
//             path="/"
//             element={isLoggedIn ? <Navigate to="/dashboard/product" replace /> : <Navigate to="/login" replace />}
//           />  
//         {/* <Route
//             path="/dashboard/product"
//             element={
//               isLoggedIn ? (
//                 <ProductDetail /> // Render ProductDetail if logged in
//               ) : (
//                 <Navigate to="/login" replace /> // Redirect to login if not
//               )
//             }
//           /> */}
//           {/* <Route
//             path="/"
//             element={<Navigate to="/login" replace />} // 'replace' avoids adding a new entry to history
//           /> */}
//           <Route
//             path="/dashboard/product"
//             element={isLoggedIn ? <RootLayout /> : <Navigate to="/login" replace/>}
//           />

//           {/* Define login and signup routes */}
//           <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
//           <Route path="/signup" element={<SignUp />} />
                    
//           <Route path="/dashboard" element={<RootLayout />}>
//             <Route index element={<Dashboard />} />
//             <Route path="card" element={<Card />} />
//             <Route path="/dashboard/invoice" element={<InvoiceReceipt />} />
//             <Route path="product/:productId" element={<ProductDetail />} />
//             <Route path="about-us" element={<AboutUs />} />
//             <Route path="contact-us" element={<ContactUs />} />
//             <Route path="product" element={<Product />} />  
//           </Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;



// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import RootLayout from './components/RootLayout';
// import Dashboard from './components/Dashboard';
// import Card from './components/card';
// import InvoiceReceipt from './components/InvoiceReceipt';
// import ProductDetail from './components/ProductDetail';
// import AboutUs from './components/AboutUs';
// import ContactUs from './components/ContactUs';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import Product from './components/Product';
// import ResetPassword from './components/ResetPassword';

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   // Use useEffect to check the user's login status
//   useEffect(() => {
//     // Add your logic to determine if the user is logged in
//     // For example, you might check a variable or user data in your state
//     // For the sake of the example, let's assume a variable isLoggedIn
//     const isLoggedIn = false/* your logic to check if user is logged in */;

//     setLoggedIn(isLoggedIn);
//   }, []);

//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           {loggedIn ? (
//             <Route
//               path="/"
//               element={
//                 <RootLayout>
//                   <Route index element={<Dashboard />} />
//                   <Route path="card" element={<Card />} />
//                   <Route path="/dashboard/invoice" element={<InvoiceReceipt />} />
//                   <Route path="product/:productId" element={<ProductDetail />} />
//                   <Route path="about-us" element={<AboutUs />} />
//                   <Route path="contact-us" element={<ContactUs />} />
//                   <Route path="product" element={<Product />} />
//                 </RootLayout>
//               }
//             />
//           ) : (
//             <>
//               <Route path="/login" element={<Login />} />
//               <Route path="/signup" element={<SignUp />} />
//               <Route path="/forgot-password" element={<ResetPassword />} />
//               <Route path="/" element={<Link to="/login">Redirect to Login</Link>} />
//             </>
//           )}
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Dashboard from './components/Dashboard';
import Card from './components/card';
import InvoiceReceipt from './components/InvoiceReceipt';
import ProductDetail from './components/ProductDetail';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Product from './components/Product';
import SendOtp from './components/SendOtp';
import VerifyOtp from './components/VerifyOtp';
import ResetPassword from './components/ResetPassword';
import AdminDashboard from './components/AdminDashboard';


function App() {
  const isLoggedIn = localStorage.getItem('username');
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard/product" /> : <Navigate to="/login" />} />
          <Route
            path="/"
            element={<Navigate to="/login" replace />} // 'replace' avoids adding a new entry to history
          />

          {/* Define login and signup routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="verify-otp" element={<VerifyOtp />} />
            <Route path="reset-password" element={<ResetPassword />} />
        

           <Route path="/send-otp" element={<SendOtp />}>
            {/* <Route path="verify-otp" element={<VerifyOtp />} />
            <Route path="reset-password" element={<ResetPassword />} /> */}
          </Route> 
          <Route path="/admin" element={<AdminDashboard/>}>
            </Route>

          
          <Route path="/dashboard" element={<RootLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="card" element={<Card />} />
            <Route path="/dashboard/invoice" element={<InvoiceReceipt />} />
            <Route path="product/:productId" element={<ProductDetail />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
          
            <Route path="product" element={<Product />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;

