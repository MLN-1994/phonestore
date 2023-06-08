
const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");

const app = express()
const port = 3000

const allowedOrigins = "*";

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

 
  app.get("/products", (req, res) => {
    const query = "SELECT * FROM products";
  
    connection.query(query, (err, results) => {
      if (err) {
        console.error("Error retrieving products:", err);
        res.sendStatus(500);
        return;
      }
      res.json(results);
    });

    
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
