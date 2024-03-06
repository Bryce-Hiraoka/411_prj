const router = require('express').Router();
const passport = require('passport');

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
  }
  
  router.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate </a>');
  });
  
  router.get('/google/callback',
    passport.authenticate('google', {
      successRedirect: 'http://localhost:3000',
      failureRedirect: '/auth/google/failure',
    })
  ); 
  
  router.get('/protected', isLoggedIn, (req, res) => {
    res.status(200).json({ message: 'You are authorized' });
    // res.setHeader('Content-Type', 'text/html');
    // res.write(`Hello ${req.user.displayName}`);
    // res.write('<a href="/logout"> Logout </a>');
    // res.end();
  });
  
  router.get('/logout', (req, res) => {
    req.logout(function(err) {
      if(err) { return next (err); }
    });
    res.send('Logged Out');
  })
  
  router.get('google/failure', (req, res) => {
    res.status(401).send('Failed to authenticate');
  });
  
  router.get('/google', passport.authenticate('google', 
    { scope: ['email', 'profile']
  }));

  module.exports = router;