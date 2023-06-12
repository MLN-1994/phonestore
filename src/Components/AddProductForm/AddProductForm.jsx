import React, { useState } from "react";
import axios from "axios";
import { ProductApi } from "../../config/endpoints";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: null, // Change the initial value to null
    description: "",
    category: "",
    stock: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] }); // Store the selected file
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(); // Create a new FormData object

    // Append all form fields to the FormData object
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("image", formData.image); // Append the file to the FormData object
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("stock", formData.stock);

    axios
      .post(ProductApi.insert(data)) // Send the FormData object as the request data
      .then((response) => {
        console.log("Item inserted successfully");
        // Handle success response
      })
      .catch((error) => {
        console.error("Failed to insert item:", error);
        // Handle error response
      });

    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Nombre del producto"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Precio
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            name="price"
            type="number"
            placeholder="Precio del producto"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Imagen
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            name="image"
            type="file" // Change the input type to "file"
            accept="image/*" // Optional: Restrict file selection to images only
            onChange={handleImageChange} // Add onChange event handler for file selection
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Descripción
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            placeholder="Descripción del producto"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Categoría
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            name="category"
            type="text"
            placeholder="Categoría del producto"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stock"
          >
            Stock
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="stock"
            name="stock"
            type="number"
            placeholder="Cantidad en stock"
            value={formData.stock}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Agregar
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
