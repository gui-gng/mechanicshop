var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Inside the homepage callback function')
  console.log(req.sessionID);
  res.render('index', { page: 'pages/home' });
});


/*
router.post('/login', function(req, res, next) {
  var user_name=req.body.username;
  var password=req.body.password;
  user = {username: req.body.username, password: req.body.password};
  console.log('username:' + user.username + "    pw: " + user.password);
  var isValidUser = userController.auth(user);
  console.log('VALID + username:' + isValidUser.username);
  isValidUser ? 
  res.send() :
  res.send("Invalid username or password") ;
  
});
*/

module.exports = router;
