const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// Home Page
const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to the e-learning platform homepage");
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Registration
const register = async (req, res, next) => {
  try {
    const { username, email, phone, password } = req.body;

    // Validate incoming data
    if (!username || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hashedPassword, // Save hashed password
    });

    // Generate token (assuming generateToken is defined in your User model)
    const token = await userCreated.generateToken();

    res.status(201).json({
      msg: "Successfully registered",
      token,
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    next(error); // Pass errors to error-handling middleware
  }
};

// Login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate incoming data
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, userExist.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate token and respond
    const token = await userExist.generateToken();
    res.status(200).json({
      msg: "Successfully logged in",
      token,
      userId: userExist._id.toString(),
    });
  } catch (error) {
    next(error);
  }
};

// Get User Data
const user = async (req, res, next) => {
  try {
    // Retrieve user data from the request object
    const userData = req.user;
    res.status(200).json({ userData });
  } catch (error) {
    console.error(`Error from user route: ${error}`);
    next(error);
  }
};

module.exports = { home, register, login, user };
