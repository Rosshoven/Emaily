// Calling the root file or "startup" file index.js 
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');


// need to put the model class above passport, because passport will make use of the user Model. Order of operations.
// order of require statements can give error messages.
require ('./models/User')
require('./services/passport');


// get connection to mongodDB using mongoURI- pass the address of the mongo instance
mongoose.connect(keys.mongoURI);

// get the routes
const app = express();

// make a statement that tells express it needs to use cookies inside our application
app.use(
    cookieSession({
        // how long this cookie can exist inside the browser before expired - 30 days in milliseconds
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

// const authRoutes = require('./routes/authRoutes');
// authRoutes(app);
require('./routes/authRoutes')(app);



app.get('/', (req, res) => {
    res.send({boys: 'dont cry'})
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);