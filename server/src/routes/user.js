const express = require('express');
const { signup } = require('../controllers/user');
const router = express.Router();






//API ROUTES
router.post('/signin', (req, res) => {

});

router.post('/signup', signup);


module.exports = router;