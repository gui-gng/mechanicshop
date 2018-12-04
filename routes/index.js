var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Inside the homepage callback function')
  console.log(req.sessionID);
  if(req.isAuthenticated()){
    console.log('---req.session:'+ JSON.stringify(req.session));
    var photoPath = req.session.passport.user.photo;
    res.render('index', { page: 'private/home',navbar: 'private/navbar', photoPath: photoPath });
  } else {
    res.render('index', { page: 'pages/home',navbar: 'partials/navbar' });
  }
});

router.get('/features', function(req, res, next) {
  res.render('index', { page: 'pages/features',navbar: 'partials/navbar' });
});

router.get('/pricing', function(req, res, next) {
  res.render('index', { page: 'pages/pricing',navbar: 'partials/navbar' });
});

module.exports = router;
