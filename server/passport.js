const router = require('express').Router();
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const passport = require('passport');
const User = require('./usermodel');
require('dotenv').config();


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
    //search for if user exists
    User.findOne({
      googleid: profile.id
    }).then((currentUser) => {
      //user does not exist
      if(!currentUser) {
        //add new user to database
        new User({
          fname: profile.given_name,
          lname: profile.family_name,
          googleid: profile.id,
          email: profile.email,
          refresh: refreshToken,
        }).save().then((newUser) => {
          //console.log('New User Created' + newUser);
          done(null, newUser)
        });
      } else {
        //console.log("user exists");
        done(null, currentUser)
      }
    });
  }
));

passport.serializeUser(function(user, done) {
    global.userID = user.id
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id).then((user) => {
      done(null, user);
    });
});

module.exports = router;