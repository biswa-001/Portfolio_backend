const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
 service:'Gmail',
  auth:{
    user:process.env.EMAIL_USER,
    pass:process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Transporter error:", error); 
  } else {
    console.log("Server is ready to take our messages:", success);
  }
});

const sendNotification = async (newContract) => {
  console.log('sendNotification called with:', newContract);
 // console.log(process.env.EMAIL_USER);
  const { name,email,messages } = newContract;

  const mailOptions = {
    from: `"contract Bot" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // Send the email to yourself
    subject: 'contract details',
    text: `
 message received:

Name: ${name}
 email: ${email}
 messages:${messages}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('message notification email sent');
  } catch (err) {
    console.error('Error sending messages email:', err);
  }
};

module.exports = sendNotification;

//just change the app password for the details 