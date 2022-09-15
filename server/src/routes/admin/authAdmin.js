const express = require('express');
const { signup, signin } = require('../../controllers/admin/authAdmin');
const { validateSignupRequest,validateSigninRequest, isRequestValidated } = require('../../validators/authUser');
const router = express.Router();






//API ROUTES
router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/admin/signin', validateSigninRequest, isRequestValidated, signin)


module.exports = router;