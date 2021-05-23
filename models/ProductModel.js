const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {type: String, required: true},
  status: {type: Number, default: 1}, 
  desc: {type: String},
  categoryId: {type: String, required: true}, 
  pCategoryId: {type: String, required: true},  // parent category id, 0 -> main category
  price: {type: Number, required: true},
  imgs: {type: Array, default: []},
  detail: {type: String}  //TODO
})

const ProductModel = mongoose.model('products', productSchema)

module.exports = ProductModel