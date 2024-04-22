const router = require('express').Router();
const passport = require('passport');

const cors = require('cors');

router.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true
}));

router.use(passport.initialize());

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
      console.log(typeof req.user._id);
      req.session.user = req.user;
      res.redirect('http://localhost:3000');
    }
  ); 
  
  router.get('/protected', isLoggedIn, (req, res) => {
    if (req.session) {
      res.status(200).json({ message: 'You are authorized' });
    } else {
      res.status(401).json({ message: 'You are not authorized' });
    }
  });

  router.get('/calendar', (req, res) => {
    console.log(res + "res")
    console.log(req + "req")
    res.send("Hello World")
  })
  
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
    { scope: ['email', 'profile', 'https://www.googleapis.com/auth/calendar'], accessType: 'offline'
  }));

module.exports = router;