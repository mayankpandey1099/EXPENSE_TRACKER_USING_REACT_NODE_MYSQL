require("dotenv").config({ path: "nodemon.json" });
const forgotPasswordRequest = require("../models/forgotpassModel");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const sequelize = require("../database");
const nodemailer = require("nodemailer");


const forgotpasswordData = async (req, res, next) => {
  try {
    const {email} = req.body;

    const user = await User.findOne({ where: { email: email } });
    if (user) {
      const forpasswordrequest = await forgotPasswordRequest.create({
        userId: user.id,
        isactive: true,
      });

      const resetPasswordLink = `http://localhost:3000/pass/resetpassword/${forpasswordrequest.id}`;
      const htmlContent = `<p>Click <a href="${resetPasswordLink}">here</a> to reset your password.</p>`;

      // Call sendSuccessEmail function
      await sendSuccessEmail(email, "Password Recovery", htmlContent);

      console.log("Recovery email sent successfully");
      res.status(200).json({ message: "Recovery email sent successfully" });
    } else {
      // Handle the case when the user with the provided email does not exist.
      res.status(404).json({ message: "Email id not found" });
    }
  } catch (err) {
    console.error(
      "Error sending recovery email:",
      err
    );
    res.status(500).json({ message: "Error sending recovery email" });
  }
};


async function sendSuccessEmail(to, subject, html) {
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Your email service provider
    auth: {
      user: process.env.EMAIL_ID, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_ID,
    to,
    subject,
    html,
  }
  try {
    await transporter.sendMail(mailOptions);
    console.log("Success email sent");
  } catch (error) {
    console.error("Error sending success email:", error);
  }
};


const resetpassword = async (req, res, next) => {
  try {
    const forPasswordRequest = await forgotPasswordRequest.findOne({
      where: { id: req.params.uuid },
    });

    if (!forPasswordRequest || !forPasswordRequest.isactive) {
      return res.status(401).json({ message: "Invalid reset link" });
    }
    const userId = forPasswordRequest.userId;
    console.log("this is the forpassword userId in resetpassword ",userId);
    // Redirect the user to the password reset form with the UUID as a query parameter
    console.log("this is req params uuid in restpassword ", req.params.uuid);
    res.redirect(
      `http://localhost:1234/resetpassword/${req.params.uuid}`
    );
  } catch (err) {
    console.error("Error in resetpassword route:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};


const newpassword = async (req, res, next) => {
  let t;
  try {
    const password = req.body.password;
    const uuid = req.body.uuid;

    console.log("this is newpassword uuid",uuid);

    const forpasswordrequest = await forgotPasswordRequest.findOne({
      where: { id: uuid, isactive: true },
    });

    if (!forpasswordrequest) {
      return res.status(401).json({ message: "Invalid reset link" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = forpasswordrequest.userId;
    t = await sequelize.transaction();
    const updatedUser = await User.update(
      { password: hashedPassword },
      { where: { id: userId } },
      { transaction: t }
    );

    // Set isactive to false after the link is used
    await forpasswordrequest.update({ isactive: false }, { transaction: t });
    t.commit();
    console.log(updatedUser);
    res.status(200).json({ message: "Password updated successfully" });
  } catch (err) {
    if (t) {
      t.rollback();
    }
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = {forgotpasswordData, resetpassword, newpassword};