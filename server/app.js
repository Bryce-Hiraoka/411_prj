const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const app = express();
const port = process.env.PORT || 5000;
const authRoute = require('./routes/auth/auth.js');

app.use(session({secret: 'cats', resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
require('./passport')

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
  })
);

app.use('/auth', authRoute);


app.listen(port, () => console.log(`Listening on port ${port}`));