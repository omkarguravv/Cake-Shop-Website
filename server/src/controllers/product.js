const slugify = require("slugify");
const Product = require("../models/product")
exports.createProduct = (req, res) => {
  const { name, price, description, category, quantity } = req.body;

  let ProductImage = [];

  if (req.files.length > 0) {
    ProductImage = req.files.map(file => {
      return { img: file.filename }
    })
  }
  const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    description,
    ProductImage,
    quantity,
    category
  });

  product.save(
    (err, product) => {
      if (err) return res.status(400).json({ err })
      if (product) {
        res.status(201).json({ product })
      }

    }
  )
}