var express = require('express');
var router = express.Router();
var passport = require('passport');
var passportConfig = require('../config/passport')(passport);

//Passport and Session config
router.use(require('express-session')({
  secret: 'some_text_string_express_Session',
  resave: true,
  saveUninitialized: true
}));
router.use(passport.initialize());
router.use(passport.session());
/* GET home page. */
router.get('/profile',function(req,res){
  // console.log("Profile page: ",req.user);
  res.render('profile',{user:req.user});
});
router.get('/logout',function(req,res){
  // console.log("Profile page: ",req.user);
  req.logout();
  res.redirect('/');
});

router.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
router.get('/auth/google/callback',
            passport.authenticate('google', {
                    successRedirect : '/profile',
                    failureRedirect : '/'
            }));
router.get('/', function(req, res, next) {
  console.log("Home Page",req.user);
  res.render('index', { name: 'Express' });
});
router.get('*',function(req,res){
  res.render('index',{name:'404 Not Found!'});
});

module.exports = router;
