const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');


const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

app.use(express.json());
app.use(cors());


// register 
app.use('/api/auth/',authRoutes);


const server = http.createServer(app);

app.get("/", (req, res) => {
    res.status(200).json({
      message: "Welcome, This App is a Discord clone",
    });
  });

// server.listen(PORT,()=>console.log( `Server is listening on ${PORT}`));

// console.log(process.env.MONGO_URI);
mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() => {
    app.listen(PORT);
    console.log("success");
   
  })
  .catch(() => {
    console.log("Connection failed!");
  });