

//IMPORT MODULES
const express = require('express');
const mongoose = require('mongoose');
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
app.use(express.json())
// app.use(morgan("dev"));
// app.use(cors({ origin: true, credentials: true }))




//ROUTES
// const testRoutes = require('./src/routes/test')
// app.use('/', testRoutes);
const categoryRoutes = require('./src/routes/category')
const userRoutes = require('./src/routes/authUser')
const adminRoutes = require('./src/routes/admin/authAdmin')
const productRoutes = require('./src/routes/product')
const cartRoutes = require('./src/routes/cart')

app.use('/api',cartRoutes)
app.use('/api',productRoutes)
app.use('/api',categoryRoutes)
app.use('/api',userRoutes)
app.use('/api',adminRoutes)

// PORT 
const port = process.env.PORT || 8080;

//LISTENER


app.listen(port, () => {
    console.log(`listening ${port}`)
})