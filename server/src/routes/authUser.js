const { request } = require('express');
const express = require('express');
const { signup, signin } = require('../controllers/authUser');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/authUser');

const router = express.Router();

//API ROUTES
router.post('/signup', validateSignupRequest,isRequestValidated , signup);
router.post('/signin', validateSigninRequest,isRequestValidated, signin)
module.exports = router;