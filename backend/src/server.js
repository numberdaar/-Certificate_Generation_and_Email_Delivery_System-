require("dotenv").config();
const express = require("express");
const cors = require("cors");
const certRoute = require("./routes/certificate");

const app = express();


const allowedOrigins = [
  "http://localhost:5173", // Vite local
  "http://localhost:3000", // React local (if needed)
  "https://certificate-generation-and-email-de.vercel.app", // Production
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (Postman, curl)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// Preflight
app.options("*", cors());

app.use(express.json());
app.use("/api/certificate", certRoute);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
