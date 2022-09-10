const express = require('express');
const { signup, signin } = require('../../controllers/admin/authUser');
const router = express.Router();






//API ROUTES
router.post('/admin/signup', signup);
router.post('/admin/signin',signin)


module.exports = router;