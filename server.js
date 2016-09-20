const pathMod = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const helmet = require('helmet')
const app = express()
const port = 6969

app.use(helmet())

var router = express.Router()
var path = __dirname + '/views/'

router.use(function (req,res,next) {
  console.log("/" + req.method)
  next()
})

router.get("/",function(req,res){
  res.sendFile(path + "index.html")
})

router.get("/resume",function(req,res){
  res.sendFile(path + "michaelFulton_F16.pdf")
})

router.get("/style.css", function(req,res){
  res.sendFile(__dirname +"/style.css")
})

router.get("/favicon.ico", function(req, res){
  res.sendFile(__dirname +"/favicon.ico")
})

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
})

app.listen(port, function(){
  console.log("Live at Port ${port}");
})
