const Category = require('../models/category')
const slugify = require('slugify');


function creatCategories(categories, parentID = null) {
  const categorylist = [];
  let category;
  if (parentID == null) {
    category = categories.filter(cat => cat.parentID == undefined);
  } else {
    category = categories.filter(cat => cat.parentID == parentID)
  }

  for (let cate of category) {
    categorylist.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      flavour: cate.flavour,
      children: creatCategories(categories, cate._id)
    });
  }
  return categorylist;
}
exports.addCategory = (req, res) => {

  
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
    

  }
  if(req.file){
    categoryObj.categoryImage = process.env.API +'/public/'+ req.file.filename;
  }
  if (req.body.parentID) {
    categoryObj.parentID = req.body.parentID;
  }
  const category = new Category(categoryObj);
  category.save((err, category) => {
    if (err) return res.status(400).json({ err })
    if (category) {
      return res.status(201).json({ category })
    }
  })

}

exports.getCategory = (req, res) => {
  Category.find({})
    .exec((err, categories) => {
      if (err) return res.status(400).json({ err })
      if (categories) {
        const categorylist = creatCategories(categories)
        res.status(201).json({ categorylist });
      }
    })

}