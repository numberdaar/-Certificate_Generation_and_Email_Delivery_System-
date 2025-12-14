const { createCanvas } = require("canvas");
const PDFDocument = require("pdfkit");
const { PassThrough } = require("stream");

exports.generateCertificate = async (data) => {
  // --- Generate JPG in memory ---
  const canvas = createCanvas(900, 600);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, 900, 600);

  ctx.font = "28px Arial";
  ctx.fillStyle = "#000";
  ctx.fillText("Certificate of Registration", 220, 80);

  ctx.font = "18px Arial";
  ctx.fillText(`Name: ${data.name}`, 100, 200);
  ctx.fillText(`Business: ${data.businessName}`, 100, 240);
  ctx.fillText(`GST: ${data.gst}`, 100, 280);
  ctx.fillText(`Address: ${data.address}`, 100, 320);

  const jpgBuffer = canvas.toBuffer("image/jpeg");

  // --- Generate PDF in memory ---
  const pdfStream = new PassThrough();
  const doc = new PDFDocument();
  doc.pipe(pdfStream);

  doc.fontSize(22).text("Certificate of Registration", { align: "center" });
  doc.moveDown();
  doc.fontSize(14).text(`Name: ${data.name}`);
  doc.text(`Business: ${data.businessName}`);
  doc.text(`GST: ${data.gst}`);
  doc.text(`Address: ${data.address}`);
  doc.end();

  const pdfBuffer = await new Promise((resolve, reject) => {
    const chunks = [];
    pdfStream.on("data", (chunk) => chunks.push(chunk));
    pdfStream.on("end", () => resolve(Buffer.concat(chunks)));
    pdfStream.on("error", reject);
  });

  // --- Return buffers with filenames for Nodemailer ---
  return [
    { filename: `${data.name}.jpg`, content: jpgBuffer },
    { filename: `${data.name}.pdf`, content: pdfBuffer },
  ];
};
