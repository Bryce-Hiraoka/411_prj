const express = require("express");
const session = require("express-session");
const passport = require("passport");
const app = express();
const port = process.env.PORT || 5000;

app.use(session({secret: 'cats', resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
require('./auth')

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate </a>');
});

app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/google/failure',
  })
);

app.get('/protected', isLoggedIn, (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write(`Hello ${req.user.displayName}`);
  res.write('<a href="/logout"> Logout </a>');
  res.end();
});

app.get('/logout', (req, res) => {
  req.logout(function(err) {
    if(err) { return next (err); }
  });
  res.send('Logged Out');
})

app.get('auth/google/failure', (req, res) => {
  res.send('something went wrong..');
});

app.get('/auth/google', passport.authenticate('google', 
  { scope: ['email', 'profile']
}));

app.listen(port, () => console.log(`Listening on port ${port}`));