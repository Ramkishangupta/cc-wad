// models/User.js ✅
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model('User', userSchema);

module.exports = User; // ← must be inside the file, at the end