//importacion de modulos (express, mysql2, cors)
const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

require("dotenv").config();

//Se crea una instancia de la aplicación Express y se define el puerto en el que se ejecutará el servidor
const app = express();
const port = 3000;

const allowedOrigins = "*";

//se establece cors para permitir todas las solicitudes de cualquier origen
app.use(
  cors({
    origin: allowedOrigins,
  })
);

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

//conexion base de datos
const connection = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Establish the connection
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

// Set up multer storage for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Set the destination directory where the uploaded files will be stored
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Generate a unique filename for the uploaded file
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split(".").pop();
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
  },
});

// Create a multer instance with the defined storage
const upload = multer({ storage: storage });

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

// Endpoint for inserting a new item with file upload
app.post("/insert", upload.single("image"), (req, res) => {
  const { name, price, description, category, stock } = req.body;

  // Get the file path from the uploaded file
  const imagePath = req.file.path;

  // Create a new item object
  const newItem = {
    name,
    price,
    image: imagePath, // Store the file path in the database
    description,
    category,
    stock,
  };

  // Insert the new item into the MySQL database
  connection.query("INSERT INTO products SET ?", newItem, (err, results) => {
    if (err) {
      console.error("Error inserting item: ", err);
      res.status(500).json({ error: "Failed to insert item" });
      return;
    }

    // Item successfully inserted
    console.log("Item inserted successfully");
    res.status(200).json({ message: "Item inserted successfully" });
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  //check if user exists
  connection.query(
    "SELECT * FROM admins WHERE username = ?",
    [username],
    (error, results) => {
      if (error) {
        console.error("Error executing query: ", error);
        res.status(500).send("Error executing query");
        return;
      }

      // if user doesn't exist, send error
      if (results.length === 0) {
        res.status(401).json({ message: "Invalid username or password" });
        return;
      }

      // if user exists, compare the password
      bcrypt.compare(password, results[0].password, (err, match) => {
        if (err) {
          console.error("Error comparing passwords: ", err);
          res.status(500).send("Error comparing passwords");
          return;
        }

        // if password doesn't match, send error message
        if (!match) {
          res.status(401).json({ message: "Invalid username or password" });
          return;
        }

        // if password matches, generate a JWT token

        const payload = { userId: results[0].id };
        const options = { expiresIn: "1h" };
        const token = jwt.sign(payload, "S3cr3tK3y#2023", options);

        res.json({ token });
        console.log(token);
      });
    }
  );
});

app.get("/uploads/:filename", (req, res) => {
  const { filename } = req.params;
  res.sendFile(path.join(__dirname, "uploads", filename));
});

// Endpoint for deleting an item by ID
app.delete("/products/:id", (req, res) => {
  const itemId = req.params.id;

  // Check if the item exists
  connection.query(
    "SELECT * FROM products WHERE id = ?",
    [itemId],
    (error, results) => {
      if (error) {
        console.error("Error executing query: ", error);
        res.status(500).send("Error executing query");
        return;
      }

      // If the item doesn't exist, send error message
      if (results.length === 0) {
        res.status(404).json({ message: "Item not found" });
        return;
      }
      // Delete the item from the database
      connection.query(
        "DELETE FROM products WHERE id = ?",
        [itemId],
        (deleteError, deleteResults) => {
          if (deleteError) {
            console.error("Error deleting item: ", deleteError);
            res.status(500).json({ error: "Failed to delete item" });
            return;
          }

          // Item successfully deleted
          console.log("Item deleted successfully");
          res.status(200).json({ message: "Item deleted successfully" });
        }
      );
    }
  );
});

app.post("/orders", (req, res) => {
  const {
    products,
    customer_name,
    customer_email,
    time,
    total_price,
    aclaraciones,
  } = req.body;

  // Create a new order object
  const newOrder = {
    products,
    customer_name,
    customer_email,
    time,
    total_price,
    aclaraciones,
  };

  // Insert the new order into the "orders" table
  connection.query("INSERT INTO orders SET ?", newOrder, (err, results) => {
    if (err) {
      console.error("Error inserting order:", err);
      res.status(500).json({ error: "Failed to insert order" });
      return;
    }

    // Order successfully inserted
    console.log("Order inserted successfully");
    res.status(200).json({ message: "Order inserted successfully" });
  });
});

app.get("/getorders", (req, res) => {
  connection.query("SELECT * FROM orders", (err, results) => {
    if (err) {
      // Handle the error
      console.error("Error fetching orders:", err);
      res.status(500).json({ error: "Failed to fetch orders" });
    } else {
      // Return the fetched orders
      res.json(results);
    }
  });
});

app.put("/products/:id/update", (req, res) => {
  const productId = req.params.id;
  const { name, price, category } = req.body;

  // Update the product in the MySQL database
  connection.query(
    "UPDATE products SET name = ?, price = ?, category = ? WHERE id = ?",
    [name, price, category, productId],
    (err, result) => {
      if (err) {
        console.error("Error updating product:", err);
        res.status(500).json({ error: "Failed to update product" });
      } else {
        res.status(200).json({ message: "Product updated successfully" });
      }
    }
  );
});

//inicia servidor

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
