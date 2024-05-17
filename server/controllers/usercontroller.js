const bcrypt = require("bcrypt");
const User = require("../models/usermodels");
var nodemailer = require("nodemailer");

exports.registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const saltRounds = 10;

    const existingUser = await User.findOne({ email });
    console.log("existingUser: ", existingUser);
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

        // Create a new user with the hashed password
        const newUser = new User({
          email,
          password: hashedPassword,
        });

        // Save the new user to the database
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
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(400)
        .json({ message: "User is not existed Please register yourself" });
    }
    const storedHashedPassword = existingUser.password;

    bcrypt.compare(password, storedHashedPassword, (err, result) => {
      if (err) {
        // Handle error
        console.error("Error comparing passwords:", err);
        return res
          .status(500)
          .json({ message: "Internal Server Error during Login" });
      }

      if (result) {
        // Passwords match, authentication successful
        console.log("Passwords match! User authenticated.");
        return res
          .status(200)
          .json({ message: "Passwords match! User authenticated." });
      } else {
        // Passwords don't match, authentication failed
        console.log("Passwords do not match! Authentication failed.");
        return res
          .status(400)
          .json({ message: "Passwords do not match! Authentication failed." });
      }
    });

    // Generate salt
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error during registration" });
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
