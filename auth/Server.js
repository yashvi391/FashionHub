const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fashionhub",
});

app.post('/signup', async (req, res) => {
  try {
    console.log(req.body); 
    const sql = "INSERT INTO users (`email`, `password`,`confirm_password`,`name`,`address`) VALUES (?,?,?,?,?)"; // Assuming id is auto-generated and confirm_password is not needed
   const values = [req.body.email, req.body.password,req.body.confirm_password,req.body.name,req.body.address];
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

app.get("/fetchproduct",(req,res)=>{
  db.query("select * from products",function(err,result,fields){
    if(err){
      console.log(err)
    }else{
      // 
      res.send(result)
    }
  })
})
// const users = [
//   { email: 'yashvimer7@gmail.com', otp: '', password: 'oldPassword' },
// ];
// app.post('/reset-password', (req, res) => {
//   const { email, otp, newPassword } = req.body;

//   // Simulate password reset logic
//   const user = users.find((user) => user.email === email && user.otp === otp);

//   if (user) {
//     // Update the user's password (replace this with your actual database update logic)
//     user.password = newPassword;

//     res.status(200).json({ message: 'Password reset successfully' });
//   } else {
//     res.status(400).json({ error: 'Failed to reset password. Invalid OTP or email' });
//   }
// });
app.post("/reset-password", (req, res) => {
  const { email, otp, newPassword, confirm_password } = req.body;
  console.log('Received Data:', req.body); 
  console.log('newPassword:', newPassword);
console.log('confirmPassword:', confirm_password);
  // Check if newPassword and confirmPassword match
  if (newPassword !== confirm_password) {
    return res.status(400).json({ error: 'New password and confirm password do not match.' });
  }

  // Find the user in the database
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      return res.status(500).json({ error: 'Internal server error.' });
    }
        
    console.log('Query results:', results);
    if (results.length === 0) {
      return res.status(400).json({ error: 'User not found.' });
    }
    const user = results[0];

    // Check if the provided OTP matches the stored OTP

    console.log(user.otp)
    console.log(otp)
    if (user.otp != otp) {
      return res.status(400).json({ error: 'Invalid OTP. Please check and try again.' });
    }
    

    // If OTP verification is successful, update the password
    db.query('UPDATE users SET password = ?, confirm_password = ? ,otp = NULL WHERE email = ?', [newPassword,confirm_password ,email], (updateErr) => {
      if (updateErr) {
        console.error('Error updating password:', updateErr);
        return res.status(500).json({ error: 'Internal server error.' });
      }

      res.status(200).json({ message: 'Password reset successfully.' });
    });
  });
});
const otpStore = {};
app.post('/send-otp', async (req, res) => {
  try {
    const { email } = req.body;

    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    otpStore.email = email
    otpStore.otp = otp

    
    try {
      db.query('UPDATE users SET otp = ? WHERE email = ?', [otp, email], (updateErr) => {
        if (updateErr) {
          console.error('Error while sending OTP:', updateErr);
          return res.status(500).json({ error: 'Failed to send otp.' });
        }

        // res.status(200).json({ message: 'OTP Sent!.' });
      });
    } catch (error) {
      return res.status(503).json({ error: true, message: error.message })
    }

    // Store the OTP in memory (You might want to use a database for a production environment)
    otpStore[email] = otp;

    console.log('Generating OTP:', otp);

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: { 
        user: process.env.GMAIL_USER || "yashvimer7@gmail.com",
        pass: process.env.GMAIL_PASS || "jmyk qrsw dtgf jptq"
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Password Reset OTP',
      text: `Your OTP for password reset is: ${otp}`,
    };

    console.log('Sending OTP email to:', email);

    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error('Error sending OTP email:', error.message);
    res.status(500).json({ error: 'Failed to send OTP email' });
  }
});
app.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;

  try {
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        return res.status(500).json({ error: 'Internal server error.' });
      }
      if (results.length === 0) {
        return res.status(400).json({ error: 'User not found.' });
      }
      const user = results[0];
      console.log(user);
      if(user.otp == otp){
        console.log({ error: false, message: "success" })
        return res.json({ error: false })
      }
  
    })
  } catch (error) {
    return res.status(500).json({ error: true , message: error.message })
  }
 

  

  // Check if the provided OTP matches the stored OTP for the given email
  /* if (email == otp) {
    // Clear the OTP from memory after successful verification (for security reasons)
    // delete otpStore[email];
    return res.json({ success: true });
  } else {
    res.status(401).json({ error: 'Invalid OTP' });
  } */
});



app.listen(8081, () => {
  console.log("Server is listening on port 8081");
});
