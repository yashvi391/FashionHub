import React from "react";
import { toast } from "react-toastify";
import { useState,useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import { FaTimes, FaEdit, FaTrash } from 'react-icons/fa';
import { Pagination } from 'react-bootstrap';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


function capitalize(str = "") {
  const firstChar = str.charAt(0).toUpperCase();
  const rest = str.slice(1);
  return firstChar + rest;
}

const Table = ({ products, handleDelete, handleEditClick, updateProducts }) => {
  const [editedProduct, setEditedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);


  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Change the current page
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleInputChange = (e, field) => {
    const updatedProduct = { ...editedProduct, [field]: e.target.value };
    setEditedProduct(updatedProduct);
  };
  const saveChanges = () => {
    // Send editedProduct to server for updating
    // Reset editedProduct state to null after saving changes
    // Optionally, you can display a toast notification for success
    fetch(`http://localhost:8081/update-product/${editedProduct.id}`, {
      method: 'PUT',
      body: JSON.stringify(editedProduct),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      updateProducts(editedProduct); // Update products in AdminDashboard component
      setShowModal(false);
      toast.success("Changes saved successfully");
    })
    .catch(error => {
      console.error('Error updating product:', error);
      toast.error("Failed to save changes. Please try again.");
    });
  };

  const handleCloseModal = () => {
    setEditedProduct(null);
    setShowModal(false);
  };

  // const handleEditModal = (productId) => {
  //   const productToEdit = products.find(product => product.id === productId);
  //   setEditedProduct(productToEdit);
  //   setShowModal(true);
  // };
  const handleEditModal = (productId) => {
    const productToEdit = products.find(product => product.id === productId);
    setEditedProduct({ ...productToEdit }); // Make sure to spread the productToEdit object to avoid mutating state directly
    setShowModal(true);
  };
  

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
          <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
            <td><img  src={`http://localhost:8081/${product.image}`} alt="Product Image" style={{ width: '50px', height: '50px' }} /></td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>
                <span className="actions">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="btn btn-delete"
                  >
                    <FaTrash />
                  </button>
                  <button
                    onClick={() => handleEditModal(product.id)}
                    className="btn btn-edit"
                  >
                    <FaEdit />
                  </button>
                </span>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr>
              <td colSpan="5">No products available</td>
            </tr>
          )}
        </tbody>
      </table>
      

      <Modal show={showModal} onHide={handleCloseModal}style={{ borderRadius: '90px', border: '2px solid #000' }}>
  <Modal.Header >
    {/* <Modal.Title>Edit Product</Modal.Title> */}
    <Modal.Title style={{ textAlign: 'center', width: '100%' }}>Edit Product</Modal.Title>
    {/* <CloseButton variant="white" onClick={handleCloseModal} /> */}
    <button className="close" onClick={handleCloseModal}>
      <FaTimes />
    </button>
  </Modal.Header>
  <Modal.Body>
    <form onSubmit={saveChanges} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          id="title"
          name="title"
          value={editedProduct ? editedProduct.title : ''}
          onChange={(e) => handleInputChange(e, 'title')}
          placeholder="Title"
          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <input
          type="number"
          id="price"
          name="price"
          value={editedProduct ? editedProduct.price : ''}
          onChange={(e) => handleInputChange(e, 'price')}
          placeholder="Price"
          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <select
          id="category"
          name="category"
          value={editedProduct ? editedProduct.category : ''}
          onChange={(e) => handleInputChange(e, 'category')}
          style={{
            width: '100%',
            height: '40px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            padding: '5px',
            marginBottom: '10px',
          }}
        >
          <option value="">Select category</option>
          <option>electronics</option>
          <option>jewelry</option>
          <option>men's clothing</option>
          <option>women's clothing</option>
        </select>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <textarea
          id="description"
          name="description"
          value={editedProduct ? editedProduct.description : ''}
          onChange={(e) => handleInputChange(e, 'description')}
          style={{
            width: '100%',
            height: '150px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
          }}
          placeholder="Description"
        ></textarea>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="image" style={{ marginBottom: '5px', display: 'block' }}>Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          placeholder="Enter image URL"
          accept="image/png, image/jpeg,image/jpg"
          onChange={(e) => handleInputChange(e, 'image')}
        />
        {editedProduct && editedProduct.image && (
          <p style={{ marginTop: '5px' }}>Selected file: {editedProduct.image.name}</p>
        )}
      </div>
      <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>Save Changes</button>
    </form>
  </Modal.Body>
</Modal>

    </div>
  );
};

export default Table;