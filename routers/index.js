const express = require('express')
const md5 = require('blueimp-md5')

const UserModel = require('../models/UserModel')
const CategoryModel = require('../models/CategoryModel')
const ProductModel = require('../models/ProductModel')
const RoleModel = require('../models/RoleModel')

const router = express.Router()

router.post('/login', (req, res) => {
  const {username, password} = req.body
  UserModel.findOne({username, password: md5(password)})
    .then(user => {
      if (user) { 
        res.cookie('userid', user._id, {maxAge: 1000 * 60 * 60 * 24})
        if (user.role_id) {
          RoleModel.findOne({_id: user.role_id})
            .then(role => {
              user._doc.role = role
              console.log('role user', user)
              res.send({status: 0, data: user})
            })
        } else {
          user._doc.role = {menus: []}
          res.send({status: 0, data: user})
        }
      } else {
        res.send({status: 1, msg: 'Username and password do no match, please try again'})
      }
    })
    .catch(error => {
      console.error('Error in login', error)
      res.send({status: 1, msg: 'Login fail, please try again'})
    })
})

// TODO: add new front-end module
router.post('/manage/user/add', (req, res) => {
  const {username, password} = req.body
  UserModel.findOne({username})
    .then(user => {
      if (user) {
        res.send({status: 1, msg: 'The username is already exist'})
        return new Promise(() => {
        })
      } else { 
        return UserModel.create({...req.body, password: md5(password || 'atguigu')})
      }
    })
    .then(user => {
      res.send({status: 0, data: user})
    })
    .catch(error => {
      res.send({status: 1, msg: 'Adding user fail, please try again'})
    })
})

// TODO: add new front-end module
router.post('/manage/user/update', (req, res) => {
  const user = req.body
  UserModel.findOneAndUpdate({_id: user._id}, user)
    .then(oldUser => {
      const data = Object.assign(oldUser, user)
      res.send({status: 0, data})
    })
    .catch(error => {
      console.error('Update user fail', error)
      res.send({status: 1, msg: 'Updating user fail, please try again'})
    })
})

// TODO: add new front-end module
router.post('/manage/user/delete', (req, res) => {
  const {userId} = req.body
  UserModel.deleteOne({_id: userId})
    .then((doc) => {
      res.send({status: 0})
    })
})
// TODO: add new front-end module
router.get('/manage/user/list', (req, res) => {
  UserModel.find({username: {'$ne': 'admin'}})
    .then(users => {
      RoleModel.find().then(roles => {
        res.send({status: 0, data: {users, roles}})
      })
    })
    .catch(error => {
      console.error('Loading user list fail', error)
      res.send({status: 1, msg: 'Loading user list fail'})
    })
})


router.post('/manage/category/add', (req, res) => {
  const {categoryName, parentId} = req.body
  CategoryModel.create({name: categoryName, parentId: parentId || '0'})
    .then(category => {
      res.send({status: 0, data: category})
    })
    .catch(error => {
      res.send({status: 1, msg: 'Adding new category fail'})
    })
})

router.get('/manage/category/list', (req, res) => {
  const parentId = req.query.parentId || '0'
  CategoryModel.find({parentId})
    .then(categorys => {
      res.send({status: 0, data: categorys})
    })
    .catch(error => {
      res.send({status: 1, msg: 'Loading category list fail'})
    })
})

router.post('/manage/category/update', (req, res) => {
  const {categoryId, categoryName} = req.body
  CategoryModel.findOneAndUpdate({_id: categoryId}, {name: categoryName})
    .then(() => {
      res.send({status: 0})
    })
    .catch(error => {
      console.error('Updating category fail', error)
      res.send({status: 1, msg: 'Updating category fail'})
    })
})

// Load category based on ID
router.get('/manage/category/info', (req, res) => {
  const categoryId = req.query.categoryId
  CategoryModel.findOne({_id: categoryId})
    .then(category => {
      res.send({status: 0, data: category})
    })
    .catch(error => {
      console.error('Load category fail', error)
      res.send({status: 1, msg: 'Load category fail'})
    })
})

// Add new product
router.post('/manage/product/add', (req, res) => {
  const product = req.body
  ProductModel.create(product)
    .then(product => {
      res.send({status: 0, data: product})
    })
    .catch(error => {
      console.error('Add new product fail', error)
      res.send({status: 1, msg: 'Add new product fail'})
    })
})

// Load product list
router.get('/manage/product/list', (req, res) => {
  const {pageNum, pageSize} = req.query
  ProductModel.find({})
    .then(products => {
      res.send({status: 0, data: pageFilter(products, pageNum, pageSize)})
    })
    .catch(error => {
      console.error('Load product list', error)
      res.send({status: 1, msg: 'Load product list'})
    })
})

// Search product base on keyword
router.get('/manage/product/search', (req, res) => {
  const {pageNum, pageSize, searchName, productName, productDesc} = req.query
  let contition = {}
  if (productName) {
    contition = {name: new RegExp(`^.*${productName}.*$`)}
  } else if (productDesc) {
    contition = {desc: new RegExp(`^.*${productDesc}.*$`)}
  }
  ProductModel.find(contition)
    .then(products => {
      res.send({status: 0, data: pageFilter(products, pageNum, pageSize)})
    })
    .catch(error => {
      console.error('Search product fail', error)
      res.send({status: 1, msg: 'Search product fail'})
    })
})

// Update product
router.post('/manage/product/update', (req, res) => {
  const product = req.body
  ProductModel.findOneAndUpdate({_id: product._id}, product)
    .then(() => {
      res.send({status: 0})
    })
    .catch(error => {
      console.error('Update product fail', error)
      res.send({status: 1, msg: 'Update product fail'})
    })
})

// Update product status
router.post('/manage/product/updateStatus', (req, res) => {
  const {productId, status} = req.body
  ProductModel.findOneAndUpdate({_id: productId}, {status})
    .then(() => {
      res.send({status: 0})
    })
    .catch(error => {
      console.error('Update product status fail', error)
      res.send({status: 1, msg: 'Update product status fail'})
    })
})


// Add account 
router.post('/manage/role/add', (req, res) => {
  const {roleName} = req.body
  RoleModel.create({name: roleName})
    .then(role => {
      res.send({status: 0, data: role})
    })
    .catch(error => {
      console.error('Add account fail', error)
      res.send({status: 1, msg: 'Add account fail'})
    })
})

// Load account list
router.get('/manage/role/list', (req, res) => {
  RoleModel.find()
    .then(roles => {
      res.send({status: 0, data: roles})
    })
    .catch(error => {
      console.error('Load account list fail', error)
      res.send({status: 1, msg: 'Load account list fail'})
    })
})

// Update account's role
router.post('/manage/role/update', (req, res) => {
  const role = req.body
  role.auth_time = Date.now()
  RoleModel.findOneAndUpdate({_id: role._id}, role)
    .then(oldRole => {
      // console.log('---', oldRole._doc)
      res.send({status: 0, data: {...oldRole._doc, ...role}})
    })
    .catch(error => {
      console.error('Update account role fail', error)
      res.send({status: 1, msg: 'Update account role fail'})
    })
})

function pageFilter(arr, pageNum, pageSize) {
  pageNum = pageNum * 1
  pageSize = pageSize * 1
  const total = arr.length
  const pages = Math.floor((total + pageSize - 1) / pageSize)
  const start = pageSize * (pageNum - 1)
  const end = start + pageSize <= total ? start + pageSize : total
  const list = []
  for (var i = start; i < end; i++) {
    list.push(arr[i])
  }

  return {
    pageNum,
    total,
    pages,
    pageSize,
    list
  }
}

require('./file-upload')(router)

module.exports = router