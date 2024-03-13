const bcrypt = require("bcrypt");
const User = require("../models/usermodels");

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
 console.log("fhgj",req.body);
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already in used' });
        }
        const newUser = new User({
            name,
            email,
            password,
            phone,
        });
  
        const result = await newUser.save();
        res.status(201).json({
            message: 'User registered successfully',
            userData: result
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error during registration' });
    }
};


