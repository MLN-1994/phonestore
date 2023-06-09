
//importacion de modulos (express, mysql2, cors)
const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");


//Se crea una instancia de la aplicación Express y se define el puerto en el que se ejecutará el servidor
const app = express()
const port = 3000

const allowedOrigins = "*";

//se establece cors para permitir todas las solicitudes de cualquier origen
app.use(
  cors({
    origin: allowedOrigins,
  })
);

//conexion base de datos
const connection = mysql2.createConnection({
    host: "23.92.18.234",
    user: "root",
    password: "37846699Langge",
    database: "phonestore",
  })

  // Establish the connection
connection.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }
    console.log("Connected to MySQL database!");
  });

 // define un endpoint GET "/products" que consulta todos los productos de la base de datos y los devuelve en formato JSON como respuesta
  app.get("/products", (req, res) => {
    const query = "SELECT * FROM products";
  
    //Si hay error durante la consulta se envia un codigo de estado 500(error interno del srvidor)
    connection.query(query, (err, results) => {
      if (err) {
        console.error("Error retrieving products:", err);
        res.sendStatus(500);
        return;
      }
      res.json(results);
    });

    
  });

    // Endpoint for inserting a new item
app.post('/insert', (req, res) => {
  const { name, price, image, description, category, stock } = req.body;

  // Create a new item object
  const newItem = {
    name,
    price,
    image,
    description,
    category,
    stock,
  };

  // Insert the new item into the MySQL database
  connection.query('INSERT INTO products SET ?', newItem, (err, results) => {
    if (err) {
      console.error('Error inserting item: ', err);
      res.status(500).json({ error: 'Failed to insert item' });
      return;
    }

    // Item successfully inserted
    console.log('Item inserted successfully');
    res.status(200).json({ message: 'Item inserted successfully' });
  });
});


//inicia servidor

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
