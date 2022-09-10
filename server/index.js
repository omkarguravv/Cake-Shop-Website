

//IMPORT MODULES
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();


// APP
const app = express()

//DB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true, 
    })
    .then(() => {
        console.log("DB connected")
    })
    .catch((err) => {
        console.log(`error ${err}`);
    })

//MIDDLEWARE
// app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }))
app.use(bodyParser());
// app.use(bodyParser.urlencoded({ extended: false }))




//ROUTES
const testRoutes = require('./src/routes/test')
app.use('/', testRoutes);

const userRoutes = require('./src/routes/authUser')
app.use('/api',userRoutes)

// PORT 
const port = process.env.PORT || 8080;

//LISTENER


app.listen(port, () => {
    console.log(`listening ${port}`)
})