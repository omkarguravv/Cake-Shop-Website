const express = require('express');
const router = express.Router();

//IMPORT CONTROLLERS
const { getTest } = require('../controllers/test')


//IMPORT MIDDLEWARES


//API ROUTES
router.get('/test', getTest)


module.exports = router;