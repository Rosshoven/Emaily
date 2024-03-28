// Calling the root file or "startup" file index.js 
const express = require('express');
// passport gives express the idea of how to handle authentication
const passport = require('passport');
// Strategy instructs passport on how to autghenticate our users with oauth
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();


// New instance of the google passport strategy. takes in the keys
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, 
    (accessToken) => {
    console.log(accessToken);
})
);

app.get(
    '/auth/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
  })
);








const PORT = process.env.PORT || 5000;
app.listen(PORT);







https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?
response_type=code&

redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&

scope=profile%20email&
client_id=419925011042-8tgdit7roq24kplha1rtfb1naeuj849m.apps.googleusercontent.com&service=lso&o2v=2&theme=mn&ddm=0&flowName=GeneralOAuthFlow