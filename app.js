var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const uuid = require('uuid/v4');
var bodyParser = require('body-parser');
var app = express();
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const axios = require('axios');
var CryptoJS = require("crypto-js");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


var user = require('./models/user');

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
},
  function(username, password, done) {
   // console.log("------------SET Strategy-------");
    var hashPW = CryptoJS.SHA256(password).toString();
    //console.log(">>>>>>>>>> Crypto Password: " + hashPW);
    var user  = {username: username, password: hashPW};
    axios.post('http://localhost:5000/api/auth', {
        username: user.username,
        password: user.password
      })
    .then(response => {
      //console.log(">>>>> Response Data: " + JSON.stringify(response.data));
      return done(null, response.data);
    })
    .catch(error => {
      if(error){
        //console.log(error);
        if(error.response.status == "401"){
          console.log("User denied");
          return done(null, null);
        }
      }
      
    });
  }
));



passport.use(new FacebookStrategy({
  clientID: 306513316657583,
  clientSecret: "3b154f484bd2bc4e4142f7b3431b09b1",
  callbackURL: "http://localhost:5000/auth/facebook/callback",
  profileFields: ['id', 'displayName', 'photos', 'email']
},
function(accessToken, refreshToken, profile, cb) {
  
  /*
  User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    return cb(err, user);
  });
  */
  var names = profile.displayName;
  var firstname, lastname = "";
  if(names.search(" ") > 0){
    var firstname = names.substring(0, names.search(" "));
    var lastname = names.substring(names.search(" ") + 1);
  }else{
    firstname = names;
  }
  


 user = {
  "username":profile.id,
  "user_firstname":firstname,
  "user_lastname":lastname,
  "user_email":profile.emails[0].value,
  "photo":profile.photos[0].value
}
console.log(">>>>>>>>>>>>>>>>>>>>>>Facebook profile: " + JSON.stringify(user));
 return cb(user);
}
));

// tell passport how to serialize the user
passport.serializeUser((user, done) => {
  console.log('Inside serializeUser callback. User id is save to the session file store here')
  console.log(JSON.stringify(user));
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log('Inside deserializeUser callback')
  console.log("The user id passport saved in the session file store is:" + JSON.stringify(user))
  //const user = 1;//sers[0].id === id ? users[0] : false; 
  done(null, user);
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  genid: (req) => {
    console.log('Inside the session middleware')
    console.log(req.sessionID)
    return uuid() // use UUIDs for session IDs
  },
  store: new FileStore(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



var indexRouter = require('./routes/index');
var apiRouter   = require('./routes/api');
var loginRouter = require('./routes/login');

app.use('/', indexRouter);
app.use('/', apiRouter);
app.use('/', loginRouter);


//Add script page
app.use('/stylesheets', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/javascript', express.static(__dirname + '/node_modules/bootstrap/dist/js'));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
