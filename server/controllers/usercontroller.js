const bcrypt = require("bcrypt");
const User = require("../models/usermodels");
var nodemailer = require("nodemailer");

exports.registerUser = async (req, res) => {


  try {
    const { email, password, firstName, phone } = req.body;
    const saltRounds = 10;

    if (!email || !password || !firstName || !phone) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use" });
    }

    // Generate salt
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        console.error("Error generating salt:", err);
        return res
          .status(500)
          .json({ message: "Internal Server Error during registration" });
      }

      // Hash the password using the generated salt
      bcrypt.hash(password, salt, async (err, hashedPassword) => {
        if (err) {
          console.error("Error hashing password:", err);
          return res
            .status(500)
            .json({ message: "Internal Server Error during registration" });
        }

        const newUser = new User({
          email,
          password: hashedPassword,
          firstName,
          phone

        });
        try {
          const result = await newUser.save();
          res.status(201).json({
            message: "User registered successfully",
            userData: result,
          });
        } catch (error) {
          console.error("Error saving user:", error);
          res
            .status(500)
            .json({ message: "Internal Server Error during registration" });
        }
      });
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error during registration" });
  }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password,firstName  } = req.body;
    
        if (!email || !password) {
          return res.status(400).json({ message: "Email and password are required." });
        }
    
        if (!email.endsWith('@gmail.com')) {
          return res.status(400).json({ message: "Only Gmail addresses are accepted." });
        }

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: "User is not registered. Please register yourself." });
        }

        const isValidPassword = await bcrypt.compare(password, existingUser.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: "Invalid credentials." });
        }
        

        const user = {
          _id: existingUser._id,
          email: existingUser.email,
          firstName: existingUser.firstName, 
          phone: existingUser.phone 
        };

        res.status(200).json({
          message: "Login successful",
          user
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error during login." });
    }
};

exports.sendEmail = async (req, res) => {
  const emailBody = {
    email: "mojose5859@mfyax.com",
    name: "test",
  };
  const { email, name } = emailBody;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "saurabhs26667@gmail.com",
      pass: "oyqt tabo oxnd tyto",
    },
  });
  var mailOptions = {
    from: "akshay",
    to: email,
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
