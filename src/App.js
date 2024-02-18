// import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
// import './App.css';
// import { createBrowserRouter,createRoutesFromElements,Route,Router,RouterProvider } from 'react-router-dom';
// import Product from './components/Product';
// import Dashboard from './components/Dashboard';
// import Card from './components/card';
// import RootLayout from './components/RootLayout';
// function App() {
//   const router=createBrowserRouter(createRoutesFromElements(
//     <Router path="/" element={<RootLayout/>}>
//       <Route index element={<Dashboard/>}></Route>
//       <Route path="/card" element={<Card/>}></Route>
//     </Router>
//     ))
  
//   return(
//     <div className="App">
//       <RouterProvider router={router}/>
//     </div>
//   );
// }
// export default App;

// import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
// import Product from './components/Product';
// import Dashboard from './components/Dashboard';
// import RootLayout from './components/RootLayout';
// import Card from './components/card';

// import ProductDetail from './components/ProductDetail';
// import InvoiceReceipt from './components/InvoiceReceipt';
// import ContactUs from './components/ContactUs';
// import AboutUs from './components/AboutUs';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<RootLayout />}>
//             <Route index element={<Dashboard />} />
//             <Route path="/Card" element={<Card />} />
//             {/* <Route path="/" element={<Card />} /> */}
//             <Route path="/" element={<Navigate to="/login" />} />
//             <Route path="/invoice" element={<InvoiceReceipt />} /> 
//             <Route path="/product/:productId" element={<ProductDetail/>} />
//             <Route path="/About-us" element={<AboutUs/>}/>
//             <Route path="/contact-us" element={<ContactUs/>}/>
//             <Route path="/login" element={<Login/>} />
//             <Route path="/signup" element={<SignUp/>} />
//             <Route path="/product" element={<Product/>} />
//             <Route render={() => <Navigate to="/login" />} />
//           </Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }
// export default App;

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
import React, { useEffect } from 'react';
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
// import { useNavigate,} from 'react-router-dom'; 


function App() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   // Check if the current path is different from '/dashboard/product'
  //   // and navigate to '/dashboard/product' if needed
  //   if (window.location.pathname !== '/dashboard/product') {
  //     navigate('/dashboard/product');
  //   }
  // }, [navigate]);
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
