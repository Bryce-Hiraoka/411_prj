const express = require("express");
const session = require("express-session");
const passport = require("passport");
const app = express();
const port = process.env.PORT || 5000;
app.use(session({secret: 'cats '}));
app.use(passport.initialize());
app.use(passport.session());
require('./auth')

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}


app.get("/api", (req, res) => {
    res.send({ message: "Hello from Express!" });
  }); 
  app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate </a>');
});

app.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure',
  })
);

app.get('/protected', isLoggedIn, (req, res) => {
  res.send("Hello World")
});

app.get('auth/google/failure', (req, res) => {
  res.send('something went wrong..');
});



app.get('/auth/google', passport.authenticate('google', 
  { scope: ['email', 'profile']
}));