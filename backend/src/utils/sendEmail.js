const nodemailer = require("nodemailer");

exports.sendEmail = async (to, files) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject: "Your Certificate",
    text: "Please find your generated certificate attached.",
    attachments: files.map(file => ({ path: file }))
  });
};
