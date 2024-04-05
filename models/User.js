const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

// schema of what a user will look like
const userSchema = new Schema({
    googleId: String
});

// tell mongoose that it needs to create new collection - first argument is name of collection we come up with, 2nd argument is the userSchema we created.
// creates a model Class
mongoose.model('users', userSchema);