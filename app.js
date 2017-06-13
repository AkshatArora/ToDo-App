var express = require('express')
var app = express()
//create a desired port name to your local host
var portname=8888;
var todocontroller = require('./controllers/todocontroller.js')
app.set('view engine','ejs')

app.use(express.static('./public'))
todocontroller(app);
app.listen(8888);