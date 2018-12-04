var express = require('express');
var router = express.Router();

router.get('/dashboard', function(req, res, next) {
    if(req.isAuthenticated()){
        var photoPath = req.session.passport.user.photo;
        res.render('index', { page: 'private/dashboard',navbar: 'private/navbar', photoPath: photoPath });
      } else {
        res.redirect('/');
      }
});

router.get('/settings', function(req, res, next) {
    if(req.isAuthenticated()){
        var photoPath = req.session.passport.user.photo;
        res.render('index', { page: 'private/settings',navbar: 'private/navbar', photoPath: photoPath });
      } else {
        res.redirect('/');
      }
});


router.get('/contactlist', function(req, res, next) {
    if(req.isAuthenticated()){
        var photoPath = req.session.passport.user.photo;
        res.render('index', { page: 'private/contactlist',navbar: 'private/navbar', photoPath: photoPath });
      } else {
        res.redirect('/');
      }
});