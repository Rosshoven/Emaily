// Calling the root file or "startup" file index.js
// import express from 'express';  
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ bye: 'mon frere' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);