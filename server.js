
const express = require('express');
const connectDB = require('./config/db');
// const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.use(express.json());

let Books = []
app.get("/books", (req, res) => {
    res.send("HomePage Of The App");
});



app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});