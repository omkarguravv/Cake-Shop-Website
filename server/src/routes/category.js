const express = require('express');
const router = express.Router();
const { addCategory, getCategory } = require('../controllers/category');


router.post('/category/create',addCategory);
router.get('/category/getcategory',getCategory);
module.exports = router;
