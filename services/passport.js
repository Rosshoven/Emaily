// passport gives express the idea of how to handle authentication
const passport = require('passport');
// Strategy instructs passport on how to autghenticate our users with oauth
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const mongoose = require('mongoose');


// get access to user model class
const User = mongoose.model('users')


// New instance of the google passport strategy. setting it up. takes in the keys
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, 
    (accessToken, refreshToken, profile, done) => {
        // get access to mongoose model and create new instance
        new User({ googleId: profile.id }).save();


        console.log('access token', accessToken);
        console.log('refresh toekn', refreshToken);
        console.log('profile', profile);
})
);




