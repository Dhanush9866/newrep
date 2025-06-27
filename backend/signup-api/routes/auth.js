const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const nodemailer = require('nodemailer');

const JWT_SECRET = "your_jwt_secret_key";

// In-memory store for OTPs (for demo; use Redis or DB in production)
const otpStore = {};

router.post("/signup", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    mobile,
    state,
    country,
    gender,
    age,
    guideCode
  } = req.body;

  if (
    !firstName || !lastName || !email || !password || !confirmPassword ||
    !mobile || !state || !country || !gender || !age
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ msg: "Passwords do not match" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "Email already registered" });
    }

    const existingMobile = await User.findOne({ mobile });
    if (existingMobile) {
      return res.status(400).json({ msg: "Mobile number already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      mobile,
      state,
      country,
      gender,
      age,
      guideCode
    });

    await newUser.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ msg: "Email and password are required" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
    res.status(200).json({ msg: "Login successful", token });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }

});

// Forgot Password: Step 1 - Request OTP

router.post("/pass", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ msg: 'Email is required' });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: 'Email not found' });
    }
    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[email] = otp;
    // Send OTP via email (mocked)
    console.log("Checking user existence");
    console.log("User found, generating OTP");
    console.log("About to send email");
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'EMAIL_ID',
        pass: 'APP_PASSWORD',
      },
    });
    await transporter.sendMail({
      from: 'EMAIL_ID',
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is: ${otp}`,
    });
    console.log("Email sent");
    
    res.json({ msg: 'OTP sent to email' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

// Forgot Password: Step 2 - Verify OTP
router.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.status(400).json({ msg: 'Email and OTP are required' });
  }
  console.log(otpStore[email]);
  console.log(otp);
  
  if (otpStore[email] && otpStore[email] === otp) {
    delete otpStore[email];
    // For demo, just return success. In production, allow password reset or login.
    return res.json({ msg: 'OTP verified. You can now reset your password or login.' });
  } else {
    return res.status(400).json({ msg: 'Invalid OTP' });
  }
});

// Reset Password: Step 3 - Set new password
router.post('/reset-password', async (req, res) => {
  const { email, newPassword } = req.body;
  if (!email || !newPassword) {
    return res.status(400).json({ msg: 'Email and new password are required' });
  }
  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const user = await User.findOneAndUpdate(
      { email },
      { password: hashedPassword }
    );
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json({ msg: 'Password updated successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

module.exports = router;