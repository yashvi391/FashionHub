// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { add } from '../store/cardSlice';
import { useDispatch } from 'react-redux';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { productId} = useParams();
  const products = useSelector((state) => state.products.data);
  const product = products.find((p) => p.id === parseInt(productId, 10));

  if (!product) {
    return <p>Product not found.</p>;
  }
  const addToCard =(product) => { 
    // dispatch an add action for fetchProducts
    dispatch(add(product));
  }

  return (
//     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//       {/* Left side: Title, Price, and Description */}
//       <div style={{ flex: '1', marginRight: '20px' }}>
//         {/* <h2>{product.title}</h2>
//         <p>{product.description}</p>
//         <p>Price: INR {product.price}</p> */}
//         <img
//           src={product.image}
//           alt={product.title}
//           style={{ maxWidth: '400px', maxHeight: '400px', width: '100%', height: 'auto' }}
//         />
//       </div>

//       {/* Right side: Image */}
//       <div style={{ flex: '1' }}>
//       <h1>{product.title}</h1>
//       <div>
//       <b>About this item</b><br/>
//         <p>{product.description}</p><br/>
//         </div>
//         <p>Price: INR {product.price}</p>
//       </div>
//     </div>
    
//   );
// };
 <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div style={{ flex: '1', textAlign: 'center' }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ maxWidth: '100%', maxHeight: '400px', width: 'auto', height: 'auto', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
        />
      </div>

      <div style={{ flex: '1', marginLeft: '20px', textAlign: 'left' }}>
        <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '24px', marginBottom: '10px' }}>
          {product.title}
        </h1>
        <p style={{fontFamily:'system-ui',fontSize:'20px',color: '#0f1111'}}>About This Item</p>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
          {product.description}
        </p>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', fontWeight: 'bold', color: '#007BFF' }}>
          Price: INR {Math.floor(product.price*50).toLocaleString('en-IN')}
        </p>
          <div style={{ display: 'flex'}}>
  <Button variant="primary" onClick={() => addToCard(product)} className="button-gradient">
    Add To Cart
  </Button>
  {/* <div style={{ marginLeft: '30px'  }}>
    <Button variant="primary" className="button-gradient">
      Buy Now
    </Button>
  </div> */}
</div>
      </div>
    </div>
  );
}; 


export default ProductDetail;
