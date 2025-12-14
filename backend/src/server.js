require("dotenv").config();
const express = require("express");
const cors = require("cors");
const certRoute = require("./routes/certificate");

const app = express();
https://certificate-generation-and-email-de.vercel.app/
// Allow requests only from your frontend URL
app.use(cors({
  origin: "https://certificate-generation-and-email-de.vercel.app",
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json());
app.use("/api/certificate", certRoute);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
