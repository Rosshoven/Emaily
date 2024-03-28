// Calling the root file or "startup" file index.js 
const express = require('express');
require('./services/passport');
// get the routes
// const authRoutes = require('./routes/authRoutes');
const app = express();

require('./routes/authRoutes')(app);

// authRoutes(app);


app.get('/', (req, res) => {
    res.send({boy: 'bye'})
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);
