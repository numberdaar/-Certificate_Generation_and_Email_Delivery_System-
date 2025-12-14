import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const form = Object.fromEntries(new FormData(e.target));

  try {
    await axios.post(
      "https://certificate-generation-and-email.onrender.com/api/certificate/generate", // <- Use Render link here
      form
    );
    alert("✅ Certificate sent to email");
  } catch (err) {
    console.error(err);
    alert("❌ Failed to generate certificate");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl p-8 md:p-12">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Certificate Registration
          </h1>
          <p className="text-gray-500 mt-2">
            Please fill in your business details
          </p>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div>
            <label className="form-label">Full Name</label>
            <input name="name" required className="form-input" />
          </div>

          <div>
            <label className="form-label">Email Address</label>
            <input name="email" type="email" required className="form-input" />
          </div>

          <div>
            <label className="form-label">GST Number</label>
            <input name="gst" required className="form-input" />
          </div>

          <div>
            <label className="form-label">Business Name</label>
            <input name="businessName" required className="form-input" />
          </div>

          <div className="md:col-span-2">
            <label className="form-label">Business Address</label>
            <textarea
              name="address"
              rows="3"
              required
              className="form-input resize-none"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white font-semibold text-lg transition-all duration-300
                bg-gradient-to-r from-indigo-500 to-purple-600
                hover:from-purple-600 hover:to-indigo-500
                ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
            >
              {loading ? "Generating Certificate..." : "Generate Certificate"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
