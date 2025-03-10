const nodemailer = require("nodemailer");

exports.sendResetEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Password Reset",
    // text: `Click the link to reset password: ${process.env.FRONTEND_URL}/reset-password/${token}`,
  };

  await transporter.sendMail(mailOptions);
};
