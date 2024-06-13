import React, { useState } from "react";
import { Modal } from "../";

import "./Form.css";

const status = [
  {
    id: "1",
    literal: "Live",
    value: "live"
  },
  {
    id: "2",
    literal: "Draft",
    value: "draft"
  },
  {
    id: "3",
    literal: "Error",
    value: "error"
  }
];

export default function Form({ closeModal, dataToEdit, onSubmit }) {
  const [formState, setFormState] = useState(
    dataToEdit || {
      title: "",
      price: "",
      category: "",
      description: "",
      image: "null"
    }
  );

  const handleChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(formState);
    setFormState({
      title: "",
      price: "",
      category: "",
      description: "",
      image: "null"
    });
  };

  return (
    <Modal closeModal={closeModal}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            className="form-control"
            type="text"
            name="title"
            placeholder="Enter Title..."
            onChange={handleChange}
            value={formState.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            className="form-control"
            type="number"
            name="price"
            placeholder="Enter Price..."
            onChange={handleChange}
            value={formState.price}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            className="form-control"
            type="text"
            name="category"
            placeholder="Enter Category..."
            onChange={handleChange}
            value={formState.category}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            name="description"
            placeholder="Enter Description..."
            onChange={handleChange}
            value={formState.description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            className="form-control"
            type="text"
            name="image"
            placeholder="Enter Image URL..."
            onChange={handleChange}
            value={formState.image}
          />
        </div>
        <button className="btn btn-outline flex" type="submit">
          Submit Data
        </button>
      </form>
    </Modal>
  );
}
