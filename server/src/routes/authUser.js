const express = require('express');
const { signup, signin } = require('../controllers/authUser');
const router = express.Router();

//API ROUTES
router.post('/signup', signup);
router.post('/signin',signin)
module.exports = router;