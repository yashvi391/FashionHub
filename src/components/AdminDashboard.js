import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { getProducts } from '../store/productSlice';
import { addProduct, getProducts, selectProducts } from "../store/productSlice";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { BoxArrowRight } from "react-bootstrap-icons";
import Table from "./Table";
// import Form from "./Form";
import "../Signup.css";


const AdminDashboard = () => {
  const dispatch = useDispatch();
  // const { data: products, status } = useSelector(selectProducts);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "null", // Set initial state to an empty string
  });
  const [products, setProducts] = useState([]);
  const categories = ["electronics", "jewelry","men's clothing", "women's clothing"];
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Add the class to the body element when the component mounts
    document.body.classList.add("signup-body");

    // Remove the class from the body element when the component unmounts
    return () => {
      document.body.classList.remove("signup-body");
    };
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file, // Set the file object in your state
    }));

    // Display the file name to the user
    if (file) {
      console.log("Selected file:", file.name);
    }
  };
  useEffect(() => {
    // Fetch products when component mounts
    fetchProducts();
  }, []);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const fetchProducts = () => {
    fetch("http://localhost:8081/fetchproduct") // Assuming this endpoint returns all products
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); // Set the list of products in state
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        // Handle error or display an error message
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.image && !formData.image.type.includes("image")) {
      alert("Please select an image file (PNG, JPG, JPEG)");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("image", formData.image);

    fetch("http://localhost:8081/addproduct", {
      method: "POST",
      body: formDataToSend,
    })
      .then((res) => res.json())
      .then((json) => {
        const productId = json.productId;
        fetchProducts();
        // navigate(`/dashboard/product`);
        dispatch(addProduct(json));
        // Show toast notification for success
        toast.success("Product added successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        // Handle error or display an error message
        toast.error("Failed to add product. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  //   .then((res) => res.json())
  //   .then((json) => {
  //     const productId = json.productId;
  //     fetch(`http://localhost:8081/product/${productId}`) // Corrected URL to fetch product details
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw new Error("Failed to fetch product details");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setProducts([...products, data]);
  //         navigate(`/dashboard/product/${productId}`);
  //         dispatch(addProduct(data));
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching product details:", error);
  //       });
  //   })
  //   .catch((error) => {
  //     console.error("Error adding product:", error);
  //   });
  // };
  const handleLogout = () => {
    // Implement logout logic here
    navigate("/login");
  };
  
  const handleDelete = (productId) => {
    fetch(`http://localhost:8081/products/${productId}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        toast.success("Product deleted successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        // Optionally, you can fetch the updated product list from the server
        // and update the state to reflect the changes
      } else {
        throw new Error('Failed to delete product');
      }
    })
    .catch(error => {
      console.error('Error deleting product:', error);
      toast.error("Failed to delete product. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    });
  };
  const handleEditClick = (productId, updatedData) => {
    fetch(`http://localhost:8081/update-product/${productId}`, { // Updated URL
      method: 'PUT',
      body: JSON.stringify(updatedData), // Convert updatedData to JSON string
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json()) // Parse response body as JSON
    .then(data => {
      console.log("Response from server:", data);
      // Check if the response is successful
      if (data) { // Check if data is truthy, indicating a successful response
        // Optionally, you can fetch the updated product list from the server
        // and update the state to reflect the changes
  
        // Show success toast for product update
        toast.success("Product updated successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        throw new Error('Failed to update product');
      }
    })
    .catch(error => {
      console.error('Error updating product:', error);
      // Show error toast if update fails
      toast.error("Failed to update product. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    });
  };
  const updateProducts = (updatedProduct) => {
    // Update products state here
    // For simplicity, let's assume products is stored in stateProducts state
    // You should modify this function based on your actual implementation
    setProducts(prevProducts => {
      return prevProducts.map(product => {
        if (product.id === updatedProduct.id) {
          return updatedProduct;
        }
        return product;
      });
    });
  };
   
  return (
    <div className="signup">
      <ToastContainer />
      <div
        className="d-flex align-items-center logout-icon"
        onClick={handleLogout}
      >

        {/* Logout icon */}
        <BoxArrowRight size={32} className="me-2" style={{ color: 'white' }}/>{" "}
        {/* Adjust size as needed and add margin to the right */}
        <span className="icon-name" style={{ color: 'white' }}>Logout</span>
      </div>

      <div className="form">
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Title"
            />
          </div>
          <div>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              required
            />
          </div>
          <div>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              style={{
                height: "40px",
                width: "300px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
              required
            >
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={{
                width: "300px",
                height: "150px",
                borderRadius: "15px",
                marginBottom: "10px",
              }}
              placeholder="Description"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="image">Image:</label>
            {/* <input
              type="file"
              id="image"
              name="image"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
              required
            /> */}
            <input
              type="file"
              id="image"
              name="image"
              placeholder="Enter image URL"
              accept="image/png, image/jpeg,image/jpg"
              // value={formData.image}
              // onChange={handleImageUrlChange}
              // onChange={handleChange}
              onChange={handleFileChange}
              required
            />
            {formData.image && <p>Selected file: {formData.image.name}</p>}
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>
      <Table
        products={products}
        handleDelete={handleDelete}
        handleEditClick={handleEditClick}
        updateProducts={updateProducts}
      />
    </div>
  );
};

export default AdminDashboard;
