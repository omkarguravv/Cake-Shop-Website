

//IMPORT MODULES
const express = require('express');
const mongoose = require('mongoose');
// const morgan = require('morgan');
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
app.use(cors())
// app.use(morgan("dev"));
// app.use(cors({ origin: true, credentials: true }))

app.use(express.json())



//ROUTES
const testRoutes = require('./src/routes/test')
app.use('/', testRoutes);
const categoryRoutes = require('./src/routes/category')
const userRoutes = require('./src/routes/authUser')
const adminRoutes = require('./src/routes/admin/authAdmin')
const ProductRoutes = require('./src/routes/product')
app.use("/api",ProductRoutes)
app.use('/api',categoryRoutes)
app.use('/api',userRoutes)
app.use('/api',adminRoutes)

// PORT 
const port = process.env.PORT || 8080;

//LISTENER


app.listen(port, () => {
    console.log(`listening ${port}`)
})