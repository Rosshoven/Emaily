// passport gives express the idea of how to handle authentication
const passport = require('passport');
// Strategy instructs passport on how to authenticate our users with oauth
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const mongoose = require('mongoose');


// get access to user model class
const User = mongoose.model('users')

// user is whatever we pulled from our DB
// serializeUser is built in method for passport.js
passport.serializeUser((user, done) => {
    // done is a callback we have to call, 1st arg err obj - null is for no error, user.id is identofying piece of info
    done(null, user.id);
    // console.log(user.id);
})


passport.deserializeUser((id, done) => {
    User.findById(id)
    .then((user) => {
        done(null, user);
    })
});


// New instance of the google passport strategy. setting it up. takes in the keys
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, 
// second argument is a callback function that gets invoked when the user is authenticated
    (accessToken, refreshToken, profile, done) => {
        // get access to mongoose model and create new instance
        User.findOne({ googleId: profile.id })
            .then((existingUser) => {
            if (existingUser) {
            // we already have that user, done()'s 1st argument is error, here is null cause it worked out, 2nd arg is the user we found
            done(null, existingUser);
        } else {
            // we don;t have auser record with thi iD, make new record
            // this creates a mongoose model instance, reps a single record in the collection
            new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user))
        }
        });

        

        console.log('access token', accessToken);
        console.log('refresh toekn', refreshToken);
        console.log('profile', profile);
})
);




