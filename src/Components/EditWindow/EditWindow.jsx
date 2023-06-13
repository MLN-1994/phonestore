import React, { useState } from "react";
import { ProductApi } from "../../config/endpoints";

const EditWindow = ({ productId, initialData, onClose }) => {
  const [editedData, setEditedData] = useState(initialData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const categories = [
    { name: "Celulares", value: "phones" },
    { name: "Cargadores", value: "cargadores" },
    { name: "Fundas", value: "fundas" },
    { name: "Otros", value: "otros" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the update request using ProductApi.update method
      await ProductApi.update(productId, editedData);

      // Close the edit window
      onClose();
    } catch (error) {
      console.error("Error updating product:", error);
      // Handle error scenario
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Editar Producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={editedData.name}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700">
              Precio
            </label>
            <input
              type="text"
              name="price"
              id="price"
              value={editedData.price}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700">
              Categoría
            </label>
            <select
              name="category"
              id="category"
              value={editedData.category}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Guardar
          </button>
        </form>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-800 px-2 py-1 mt-2 rounded-md border border-gray-300"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default EditWindow;
