
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

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Navigate to="/login" />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/dashboard" element={<RootLayout />}>
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
import ResetPassword from './components/ResetPassword';


function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/login" replace />} // 'replace' avoids adding a new entry to history
          />

          {/* Define login and signup routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ResetPassword />} />
          

          
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
// import React, { useEffect, useState } from 'react';
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

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

//   useEffect(() => {
//     // Check initial login state from local storage or other mechanism
//     const storedIsLoggedIn = window.localStorage.getItem('isLoggedIn'); // Example
//     setIsLoggedIn(storedIsLoggedIn === 'true');
//   }, []); // Empty dependency array for one-time execution

//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               // Simplified logic using ternary operator
//               isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login onLogin={() => setIsLoggedIn(true)} />
//             }
//           />

//           <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
//           <Route path="/signup" element={<SignUp />} />

//           <Route
//             path="/dashboard/product"
//             element={
//               // Use nested Routes for conditional rendering within dashboard
//               isLoggedIn ? (
//                 <RootLayout>
//                   {/* Nested Routes within RootLayout */}
//                   <Route index element={<Dashboard />} />
//                   <Route path="card" element={<Card />} />
//                   <Route path="/dashboard/invoice" element={<InvoiceReceipt />} />
//                   <Route path="product/:productId" element={<ProductDetail />} />
//                   <Route path="about-us" element={<AboutUs />} />
//                   <Route path="contact-us" element={<ContactUs />} />
//                   <Route path="product" element={<Product />} />
//                 </RootLayout>
//               ) : (
//                 <Navigate to="/login" replace />
//               )
//             }
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
