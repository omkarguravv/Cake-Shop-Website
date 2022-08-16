

//IMPORT MODULES
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require("dotenv").config();


// APP
const app = express()

//DB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB connected")
    })
    .catch((err) => {
        console.log(`error ${err}`);
    })

//MIDDLEWARE
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }))

//ROUTES
const testRoutes=require('./routes/test')
app.use('/',testRoutes);

// PORT 
const port = process.env.PORT || 8080;

//Listeners
app.get('/home', (req, res) => {
    res.send("hello")
})

app.listen(port, () => {
    console.log(`listening ${port}`)
})