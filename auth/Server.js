const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app=express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fashionhub",
});

app.post('/signup', async (req, res) => {
  try {
    console.log(req.body); 
    const sql = "INSERT INTO users (`email`, `password`,`confirm_password`) VALUES (?,?,?)"; // Assuming id is auto-generated and confirm_password is not needed
   const values = [req.body.email, req.body.password,req.body.confirm_password];
    console.log("values",values)
    await db.query(sql, values);

    res.json({ message: 'User created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating user' });
  }
});
app.post('/login', async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await new Promise((resolve, reject) => {
      db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
    console.log('User Data:', user);

    if (user.length > 0) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Error during database query:', err);
    res.status(500).json({ message: 'Error during login'});
  }
});

app.listen(8081,()=>{
    console.log("listening");
})