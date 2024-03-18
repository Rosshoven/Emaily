// Calling the root file or "startup" file index.js
// import express from 'express';  
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});


const PORT = process.env.PORT || 5001;
app.listen(PORT);