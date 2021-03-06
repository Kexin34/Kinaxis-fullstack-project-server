const fs = require('fs')
const multer = require('multer')
const path = require('path')

const dirPath = path.join(__dirname, '..', 'public/upload')

const storage = multer.diskStorage({
  destination: function (req, file, cb) { 
    if (!fs.existsSync(dirPath)) {
      fs.mkdir(dirPath, function (err) {
        if (err) {
          console.log(err)
        } else {
          cb(null, dirPath)
        }
      })
    } else {
      cb(null, dirPath)
    }
  },
  filename: function (req, file, cb) {
    var ext = path.extname(file.originalname)
    cb(null, file.fieldname + '-' + Date.now() + ext)
  }
})

const upload = multer({storage})
const uploadSingle = upload.single('image')

module.exports = function fileUpload(router) {
  router.post('/manage/img/upload', (req, res) => {
    uploadSingle(req, res, function (err) { 
      if (err) {
        return res.send({
          status: 1,
          msg: 'Fail to upload file'
        })
      }
      var file = req.file
      res.send({
        status: 0,
        data: {
          name: file.filename,
          //url: 'http://localhost:5000/upload/' + file.filename
          url: 'https://mysterious-fjord-53168.herokuapp.com/upload/' + file.filename
        }
      })

    })
  })
  
  // File delete
  router.post('/manage/img/delete', (req, res) => {
    const {name} = req.body
    fs.unlink(path.join(dirPath, name), (err) => {
      if (err) {
        res.send({
          status: 1,
          msg: 'Fail to delete file'
        })
      } else {
        res.send({
          status: 0
        })
      }
    })
  })
}
