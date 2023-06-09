//importacion de modulos (express, mysql2, cors)
const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
  host: "23.92.18.234",
  user: "root",
  password: "birdie12",
  database: "phonestore",
});

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
app.post("/insert", (req, res) => {
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

// const secret = process.env.ACCESS_TOKEN_SECRET;

// function generateToken(userId) {
//   const payload = { userId };
//   const options = { expiresIn: "1h" };
//   return jwt.sign(payload, secret, options);
// }

// const plainPassword = "juancruzcirigliano";

// const saltRounds = 10;

// // generate a salt for the hash
// bcrypt.genSalt(saltRounds, function (err, salt) {
//   if (err) {
//     console.error("Error generating salt: ", err);
//     return;
//   }

//   // hash the plain password
//   bcrypt.hash(plainPassword, salt, function (err, hash) {
//     if (err) {
//       console.error("Error hashing password: ", err);
//       return;
//     }

//     connection.query(
//       "INSERT INTO admins (username, password) VALUES (?, ?)",
//       ["juancruzcirigliano", hash],
//       function (error, results, fields) {
//         if (error) {
//           console.error("Error executing query: ", error);
//           return;
//         }

//         console.log("New user added to the database!!");
//       }
//     );
//   });
// });

//inicia servidor

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
