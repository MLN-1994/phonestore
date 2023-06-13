import React, { useEffect, useState } from "react";
import { ProductApi } from "../../config/endpoints";

const AdminPedidos = () => {
  const [orders, setOrders] = useState([]);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    if (userToken) {
      setLogged(true);
    }
  }, [logged]);

  useEffect(() => {
    if (logged) {
      const fetchOrders = async () => {
        try {
          const response = await ProductApi.getOrders();
          setOrders(response.data);
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      };

      fetchOrders();
    }
  }, [logged]);

  const formatTime = (timeString) => {
    const date = new Date(timeString);
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    const formattedTime = date.toLocaleTimeString("es-AR", {
      timeStyle: "medium",
    });
    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <div className="py-12 w-3/4 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {orders.map((order) => (
          <div key={order.id} className="relative">
            <div className="border bg-white p-2 shadow rounded-xl hover:shadow-2xl">
              <div className="my-4 p-2">
                <p className="font-bold text-xl">ID del pedido: </p>
                <p className="italic">{order.id}</p>
              </div>
              <div className="my-4 p-2">
                <p className="font-bold text-xl">Productos: </p>
                <p className="italic">{order.products}</p>
              </div>
              <div className="my-4 p-2">
                <p className="font-bold text-xl">Cliente: </p>
                <p className="italic">{order.customer_name}</p>
              </div>
              <div className="my-4 p-2">
                <p className="font-bold text-xl">Email: </p>
                <p className="italic">{order.customer_email}</p>
              </div>
              <div className="my-4 p-2">
                <p className="font-bold text-xl">Horario: </p>
                <p className="italic">{formatTime(order.time)}</p>
              </div>
              <div className="my-4 p-2">
                <p className="font-bold text-xl">Precio total: </p>
                <p className="italic">{order.total_price}</p>
              </div>
              <div className="my-4 p-2">
                <p className="font-bold text-xl">Comentarios: </p>
                <p className="italic">{order.aclaraciones}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPedidos;
