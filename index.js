// Calling the root file or "startup" file index.js 
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

// need to put the model class above passport, because passport will make use of the user Model. Order of operations.
// order of require statements can give error messages.
require ('./models/User')
require('./services/passport');



// get connection to mongodDB - pass the address of the mongo instance
mongoose.connect(keys.mongoURI);

// get the routes
// const authRoutes = require('./routes/authRoutes');
const app = express();

require('./routes/authRoutes')(app);

// authRoutes(app);


app.get('/', (req, res) => {
    res.send({boy: 'bye bye bye'})
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);