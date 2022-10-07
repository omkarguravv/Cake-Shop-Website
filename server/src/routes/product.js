const express = require('express');
const { createProduct } = require('../controllers/product');
const multer = require('multer');
const shortid = require('shortid');
const router = express.Router();
const path = require('path');

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

router.post("/product/create", upload.array("ProductImage"),createProduct);
module.exports = router;