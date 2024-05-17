const mongoose = require('mongoose')
require('dotenv').config()

const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


const userSchema = new mongoose.Schema({
    email: {type:String, unique: true, required: true},
    password: {type: String, required: true},

})
module.exports = mongoose.model('User', userSchema)