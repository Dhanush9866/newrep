const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const nodemailer = require('nodemailer');

const JWT_SECRET = "your_jwt_secret_key";

// In-memory store for OTPs (for demo; use Redis or DB in production)
const otpStore = {};

// Helper to generate referral code
function generateReferralCode(length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

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
    // Generate unique referral code
    let referralCode;
    let codeExists = true;
    while (codeExists) {
      referralCode = generateReferralCode();
      codeExists = await User.findOne({ referralCode });
    }
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
      guideCode,
      referralCode
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
        user: 'laptoptest7788@gmail.com',
        pass: 'uqfiabjkiqudrgdw',
      },
    });
    await transporter.sendMail({
      from: 'laptoptest7788@gmail.com',
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

// Get current user info (for dashboard)
const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

router.get('/auth/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json({ data: user });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

// Generate referral code for logged-in user if not present
router.post('/generate-referral-code', authMiddleware, async (req, res) => {
  console.log("Camed to generate referral code api");
  try {
    console.log("Camed to generate referral code api");
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    if (user.referralCode) {
      return res.json({ referralCode: user.referralCode, msg: 'Referral code already exists' });
    }
    // Generate unique referral code
    let referralCode;
    let codeExists = true;
    while (codeExists) {
      referralCode = generateReferralCode();
      codeExists = await User.findOne({ referralCode });
    }
    user.referralCode = referralCode;
    await user.save();
    res.json({ referralCode });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

module.exports = router;