const mongoose = require('mongoose')
const md5 = require('blueimp-md5')

const userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  create_time: {type: Number, default: Date.now},
  role_id: String
})

const UserModel = mongoose.model('users', userSchema)

// Intialization: admin/admin
UserModel.findOne({username: 'admin'}).then(user => {
  if(!user) {
    UserModel.create({username: 'admin', password: md5('admin')})
            .then(user => {
              console.log('Intialization, default admin/admin')
            })
  }
})

module.exports = UserModel