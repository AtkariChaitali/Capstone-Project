var express = require ('express');
var session = require ('express-session');
var cookie = require ('cookie-parser');
var path = require ('path');
var ejs= require ('ejs');
var multer = require('multer');
var async = require ('async');
var nodmailer = require ('nodemailer');
var crypto = require ('crypto');
var  sweetalert = require('sweetalert2');
var expressValidator = require ('express-validator');
var bodyParser = require ('body-parser');
const http=require('http');

var db = require ('./models/db_controller');
var signup = require ('./controllers/signup');
var login = require ('./controllers/login');
var verify = require ('./controllers/verify');
var reset = require('./controllers/reset_controller');
var doc_controller = require ('./controllers/doc_controller');
var employee = require ('./controllers/employee.js');
var appointment = require ('./controllers/appointment');
var store = require ('./controllers/store');
var receipt = require ('./controllers/receipt');
var complain = require ('./controllers/complain');
var  home = require ('./controllers/home');
var add_doc = require('./controllers/add_doctor');
var set = require('./controllers/set_controller');
var logout = require ('./controllers/logout');
var landing = require ('./controllers/landing');
var inbox = require ('./controllers/inbox');
var chat = require ('./controllers/chat'); 
var app = express();

app.set('view engine ', 'ejs');
const server = http.createServer(app);

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookie());
//app.use(expressValidator());
const PORT = process.env.PORT||3000
server.listen(PORT,()=>console.log(`server running on port ${PORT}`))

/* var server =app.listen(3000 , function(){

    console.log('server started');
}); */
app.use('/signup' , signup);
app.use('/login' ,login);
app.use ('/verify', verify);
app.use('/resetpassword' ,reset);
app.use('/doctors', doc_controller);
app.use('/employee',employee);
app.use ('/appointment',appointment);
app.use ('/store',store);
app.use('/receipt',receipt);
app.use ('/complain',complain);
app.use('/home' , home);
app.use('/setpassword',set);
app.use ('/logout',logout);
app.use ('/',landing);
app.use ('/inbox',inbox);

// app.use('/doctors/add_doctor',add_doc);