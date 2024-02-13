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

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';
import Product from './components/Product';
import Dashboard from './components/Dashboard';
import RootLayout from './components/RootLayout';
import Card from './components/card';
import ProductDetail from './components/ProductDetail';
import InvoiceReceipt from './components/InvoiceReceipt';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import SignUp from './components/SignUp';
// import { Provider,useDispatch } from 'react-redux';  
// import { getProducts } from './store/productSlice'; 

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const handleLogin = () => {
    // Perform login logic and set loggedIn to true upon successful login
    setLoggedIn(true);
    // navigate('product');
  
    // dispatch(getProducts());
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          {loggedIn ? (
            <>
            <Route path="/" element={<RootLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/product" element={<Product />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/card" element={<Card />} />
              <Route path="/invoice" element={<InvoiceReceipt />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Route>
            </>
          ) : (
            <>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/signup" element={<SignUp />} /> 
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;


