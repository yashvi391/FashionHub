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

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import Dashboard from './components/Dashboard';
import RootLayout from './components/RootLayout';
import Card from './components/card';

import ProductDetail from './components/ProductDetail';
import InvoiceReceipt from './components/InvoiceReceipt';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/Card" element={<Card />} />
            <Route path="/" element={<Card />} />
            <Route path="/invoice" element={<InvoiceReceipt />} /> 
            <Route path="/product/:productId" element={<ProductDetail/>} />
            <Route path="/About-us" element={<AboutUs/>}/>
            <Route path="/contact-us" element={<ContactUs/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;

// import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Product from './components/Product';
// import Dashboard from './components/Dashboard';
// import RootLayout from './components/RootLayout';

// import ProductDetail from './components/ProductDetail';
// import InvoiceReceipt from './components/InvoiceReceipt';
// // import Card from './components/Cart'; 
// import Cart from './components/card';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<RootLayout />}>
//             <Route index element={<Dashboard />} />
//             <Route path="/Cart" element={<Cart />} />
//             <Route path="/" element={<Cart />} />
//             <Route path="/invoice-receipt" element={<InvoiceReceipt />} /> 
//             <Route path="/product/:productId" element={<ProductDetail />} />
//           </Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
