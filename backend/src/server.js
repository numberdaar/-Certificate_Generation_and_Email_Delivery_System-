require("dotenv").config();
const express = require("express");
const cors = require("cors");
const certRoute = require("./routes/certificate");

const app = express();

const FRONTEND_URL = "https://certificate-generation-and-email-de.vercel.app";

app.use(cors({
  origin: FRONTEND_URL,   // ✅ NO trailing slash
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

// ✅ Explicitly handle preflight
app.options("*", cors());

app.use(express.json());
app.use("/api/certificate", certRoute);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
