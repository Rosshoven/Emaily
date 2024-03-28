// Calling the root file or "startup" file index.js
// import express from 'express';  
const express = require('express');
const app = express();
// passport gives express the idea of how to handle authentication
const passport = require('passport');
// Strategy instructs passport on how to autghenticate our users with oauth
const GoogleStrategy = require('passport-google-oauth20').Strategy;


// New instance of the google passport strategy
passport.use(new GoogleStrategy());


const PORT = process.env.PORT || 5000;
app.listen(PORT);