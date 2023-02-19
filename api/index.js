require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();

app.get("/", (req, res) => {
    res.status(200).json("Welcome to server")
});

app.listen(process.env.PORT, () => {
    console.log("Server is running successfully!!");
})