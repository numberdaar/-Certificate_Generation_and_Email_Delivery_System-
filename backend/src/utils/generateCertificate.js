
const { createCanvas } = require("canvas");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

exports.generateCertificate = async (data) => {
  const canvas = createCanvas(900, 600);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.fillRect(0,0,900,600);
  ctx.font = "28px Arial";
  ctx.fillStyle = "#000";
  ctx.fillText("Certificate of Registration", 220, 80);
  ctx.font = "18px Arial";
  ctx.fillText(`Name: ${data.name}`, 100, 200);
  ctx.fillText(`Business: ${data.businessName}`, 100, 240);
  ctx.fillText(`GST: ${data.gst}`, 100, 280);
  ctx.fillText(`Address: ${data.address}`, 100, 320);

  const jpg = path.join("certificates", `${data.name}.jpg`);
  fs.writeFileSync(jpg, canvas.toBuffer("image/jpeg"));

  const pdf = path.join("certificates", `${data.name}.pdf`);
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(pdf));
  doc.fontSize(22).text("Certificate of Registration", {align:"center"});
  doc.moveDown();
  doc.fontSize(14).text(`Name: ${data.name}`);
  doc.text(`Business: ${data.businessName}`);
  doc.text(`GST: ${data.gst}`);
  doc.text(`Address: ${data.address}`);
  doc.end();

  return [jpg, pdf];
};
