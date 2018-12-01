var express = require('express');
var router = express.Router();
const passport = require('passport');
const axios = require('axios');

router.get('/login', function(req, res, next) {
    console.log(req.sessionID);
    if(req.isAuthenticated()){
        res.render('index', { page: 'pages/home' });
    } else {
        res.render('index', { page: 'pages/login' });
    }
});


router.post('/login', (req, res, next) => {
    console.log('-------Inside POST /login callback');
    
    passport.authenticate('local', (err, user, info) => {

        if(!user){
            console.log('<><><><,Login failed');
            console.log(">>>>>>>>>err: " + err);
            console.log(">>>>>>>>>info:" + info);
            return res.send({"data": "Fail"});
            res.render('index', { page: 'pages/login' });
            return ;
        }
      console.log('><><><><Login success');
      console.log('-----Inside passport.authenticate() callback');
      console.log('---req.session:'+ JSON.stringify(req.session));
      console.log('----req.session.passport:'+ JSON.stringify(req.session.passport))
      console.log('--req.user:' + req.user)
      req.login(user, (err) => {
        console.log('Inside req.login() callback')
        //console.log('---req.session:'+ JSON.stringify(req.session));
        console.log('req.session.passport:' + JSON.stringify(req.session.passport));
        console.log('req.user:' + JSON.stringify(req.user));
        //return res.render("test");
        return res.send({"data": "Success"});
        return res.send('You were authenticated & logged in!\n');
      })
    })(req, res, next);
  });

  router.get('/authrequired', (req, res) => {
    //console.log('Inside GET /authrequired callback')
    //console.log(`User authenticated? ${req.isAuthenticated()}`)
    if(req.isAuthenticated()) {
      res.send('you hit the authentication endpoint\n')
    } else {
      res.redirect('/')
    }
  });


  router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
  });

  module.exports = router;