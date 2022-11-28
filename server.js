var express = require("express")
var app = express()
var multer = require("multer")
var cors = require("cors")

app.use(cors())

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload")
  },
  filename: function (req, file, cb) {
    let filename_xy = Date.now() + "-" + file.originalname
    cb(null, filename_xy)
    console.log(filename_xy)
  },
})

var upload = multer({ storage: storage }).array("file")

app.post("/upload", function (req, res) {
  console.log("Hier kam etwas an")
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).send(req.files)
  })
})

app.listen(3000, function () {
  console.log("App running on port 3000")
})
