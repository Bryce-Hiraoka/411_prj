const router = require('express').Router();
const session = require('express-session');
const passport = require('passport');

const cors = require('cors');

require('dotenv').config();

router.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true
}));
router.use(session({
  secret: process.env.EXPRESS_SESSION,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
}));
router.use(passport.initialize());
router.use(passport.session());

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
  }
  
  router.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate </a>');
  });
  
  router.get('/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/auth/google/failure',
    }), 
    function(req, res) {
      req.session.user = req.user;
      res.redirect('http://localhost:3000');
    }
  ); 
  
  router.get('/loggedin', isLoggedIn, (req, res) => {
    if (req.session) {
      res.status(200).json({ message: 'You are authorized' });
    } else {
      res.status(401).json({ message: 'You are not authorized' });
    }
  });
  
  router.get('/logout', (req, res) => {
    req.logout(function(err) {
      if(err) { return next (err); }
    });
    res.redirect('http://localhost:3000');
  })
  
  router.get('google/failure', (req, res) => {
    res.status(401).send('Failed to authenticate');
  });
  
  router.get('/google', passport.authenticate('google', 
    { scope: ['email', 'profile']
  }));

module.exports = router;