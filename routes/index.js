var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Inside the homepage callback function')
  console.log(req.sessionID);
  if(req.isAuthenticated()){
    res.render('index', { page: 'private/home',navbar: 'private/navbar' });
  } else {
    res.render('index', { page: 'pages/home',navbar: 'partials/navbar' });
  }

});
module.exports = router;
