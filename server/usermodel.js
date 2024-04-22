const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema ({
    fname: String,
    lname: String,
    googleid: String,
    email: String,
    refresh: String,
})

const User = mongoose.model('user', userSchema);

module.exports = User;