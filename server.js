const mongoose = require('mongoose')
const express = require('express')
const app = express() 
const keys = require('./config/keys')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true})) 
app.use(express.json()) 
const cookieParser = require('cookie-parser')
app.use(cookieParser())
const indexRouter = require('./routers')
app.use('/', indexRouter)  

mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
  .then(() => {
    console.log('DB connect')
    app.listen(process.env.PORT || 5000, () => {
      console.log('Server connected, Please visit: http://localhost:5000')
    })
  })
  .catch(err => {
    console.error('Server connecte fail', err)
  })

