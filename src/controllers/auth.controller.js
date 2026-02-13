const User = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

exports.sendOTP = async (req, res) => {
  const { email } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiry = new Date(Date.now() + 5 * 60000);

  let user = await User.findOne({ where: { email } });

  if (!user) {
    user = await User.create({
      id: uuidv4(),
      email,
      otp,
      otp_expiry: expiry
    });
  } else {
    user.otp = otp;
    user.otp_expiry = expiry;
    await user.save();
  }

  console.log("OTP:", otp); // for testing

  res.json({ message: "OTP sent (check console)" });
};

exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user || user.otp !== otp || user.otp_expiry < new Date()) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );

  res.json({ token });
};
