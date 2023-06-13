import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductApi } from "../../config/endpoints";
import { MdDelete } from "react-icons/md";
import EditWindow from "../EditWindow/EditWindow";

const ProductList = ({ products, category }) => {
  const [logged, setLogged] = useState(false);
  const [editProductId, setEditProductId] = useState(null); // Track the product ID to edit
  const [showEditWindow, setShowEditWindow] = useState(false); // Control the visibility of the EditWindow
  const handleDelete = async (productId) => {
    try {
      await ProductApi.delete(productId);
      // Remove the deleted product from the state array
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
      // Handle successful deletion (e.g., display a success message)
    } catch (error) {
      console.error("Error deleting product:", error);
      // Handle error scenario (e.g., display an error message)
    }
  };

  const handleEdit = (productId) => {
    setEditProductId(productId);
    setShowEditWindow(true);
  };

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    if (userToken) {
      setLogged(true);
    }
  }, []);

  return (
    <>
      <div className="py-12 w-3/4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="relative">
              {logged && (
                <>
                  <MdDelete
                    size="24"
                    className="absolute top-0 right-0 m-2 text-red-500 cursor-pointer"
                    onClick={() => handleDelete(product.id)}
                  >
                    x
                  </MdDelete>
                  <button
                    className="absolute top-0 left-0 m-2 text-blue-500 cursor-pointer"
                    onClick={() => handleEdit(product.id)}
                  >
                    Editar
                  </button>
                </>
              )}
              <div className="border bg-white p-2 shadow rounded-xl hover:shadow-2xl">
                <div className="">
                  <div className="flex justify-center  p-2">
                    <img
                      className="w-52 h-52 object-cover mt-6 hover:scale-[1.15] duration-500 ease-in-out hover:transition-all"
                      src={`${import.meta.env.VITE_API_URL}/${product.image}`}
                      alt=""
                    />
                  </div>
                  <div className="px-2 py-2 flex-grow my-4">
                    <div className="my-4">
                      <p className="font-bold text-xl text-zinc-800">
                        {product.name}
                      </p>
                    </div>
                    <div className="my-2">
                      <p className="font-semibold">${product.price}</p>
                    </div>
                  </div>
                </div>
                <div className="my-4 p-2">
                  <Link
                    to={`/detail/${product.id}`}
                    className="text-blue-600 border border-blue-500 hover:bg-gradient-to-br from-blue-500 to-purple-700 hover:text-white p-2 rounded-md shadow hover:shadow-lg font-semibold text-lg flex justify-center w-full"
                  >
                    Ver mas
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showEditWindow && (
        <EditWindow
          className="z-10"
          productId={editProductId}
          initialData={products.find((product) => product.id === editProductId)}
          onClose={() => setShowEditWindow(false)}
          onEdit={(productId, editedData) => {
            // Handle the edit operation here
            console.log("Edit product:", productId, editedData);
            // Call the appropriate API endpoint to update the product
          }}
        />
      )}
    </>
  );
};
export default ProductList;
