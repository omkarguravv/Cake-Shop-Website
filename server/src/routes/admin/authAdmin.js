const express = require('express');
const { signup, signin } = require('../../controllers/admin/authAdmin');
const router = express.Router();






//API ROUTES
router.post('/admin/signup', signup);
router.post('/admin/signin',signin)


module.exports = router;