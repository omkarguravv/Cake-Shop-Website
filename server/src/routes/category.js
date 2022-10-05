const express = require('express');
const router = express.Router();
const { addCategory, getCategory } = require('../controllers/category');
const multer = require('multer');
const shortid = require('shortid');
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname),"uploads"));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,shortid.generate() + '-' + file.originalname)
    }
  })
const upload = multer({storage})

router.post('/category/create',upload.single('categoryImage'),addCategory);
router.get('/category/getcategory',getCategory);
module.exports = router;
