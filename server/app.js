const express = require("express");
const cors = require("cors");
const passport = require("passport");
const app = express();
const port = process.env.PORT || 5000;
const authRoute = require('./routes/auth/auth.js');
const calendarRoute = require('./routes/auth/calendar.js')
require('dotenv').config();
const mongoose = require("mongoose");
const cookieSession =require('cookie-session');

//connect to mongodb
mongoose.connect(process.env.mongoURI)

//cookie session initialization
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.cookiekey]
}));

//passport
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
app.use('/calendar', calendarRoute);


app.listen(port, () => console.log(`Listening on port ${port}`));