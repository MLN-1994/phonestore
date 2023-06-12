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

app.post("/register", (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  connection.query(
    "SELECT * FROM admins WHERE username = ?",
    [username],
    (error, results) => {
      if (error) {
        console.error("Error executing query: ", error);
        res.status(500).send("Error executing query");
        return;
      }

      // If user already exists, send error
      if (results.length > 0) {
        res.status(409).json({ message: "Username already exists" });
        return;
      }

      // If user doesn't exist, hash the password and create a new user
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          console.error("Error hashing password: ", err);
          res.status(500).send("Error hashing password");
          return;
        }

        // Insert the new user into the database
        connection.query(
          "INSERT INTO admins (username, password) VALUES (?, ?)",
          [username, hashedPassword],
          (error, results) => {
            if (error) {
              console.error("Error executing query: ", error);
              res.status(500).send("Error executing query");
              return;
            }

            // Registration successful
            res.status(200).json({ message: "Registration successful" });
          }
        );
      });
    }
  );
});

app.get("/uploads/:filename", (req, res) => {
  const { filename } = req.params;
  res.sendFile(path.join(__dirname, "uploads", filename));
});
//inicia servidor

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
