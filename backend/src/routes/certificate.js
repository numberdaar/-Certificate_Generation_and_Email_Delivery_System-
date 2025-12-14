
const express = require("express");
const { generateCertificate } = require("../utils/generateCertificate");
const { sendEmail } = require("../utils/sendEmail");
const router = express.Router();

router.post("/generate", async (req, res) => {
  try {
    const files = await generateCertificate(req.body);
    await sendEmail(req.body.email, files);
    res.json({ success: true, message: "Certificate sent successfully" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
