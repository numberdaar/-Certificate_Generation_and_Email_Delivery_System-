# 🎓 Certificate Generation & Email System

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

> Full‑stack Node.js application to generate certificates dynamically and send them via email.  
> Beautiful and responsive frontend built with React + Tailwind CSS.

---

## 🚀 Features

- 🖼 **Dynamic Certificate Generation** – Outputs JPG + PDF  
- 📧 **Automated Email Delivery** – Sends certificates directly to email  
- 💻 **Modern UI** – Responsive form with Tailwind CSS  
- 🔗 **Backend API** – Clean Node.js + Express structure

---

## 🛠 Tech Stack

**Backend:** Node.js, Express, Canvas, PDFKit, Nodemailer  
**Frontend:** React, Vite, Tailwind CSS  
**Others:** Axios, dotenv  

---

## 📡 API

**POST** `/api/certificate/generate`

<details>
<summary>Request Body</summary>

| Field        | Type   | Description              |
|--------------|--------|--------------------------|
| name         | string | Full Name of the user    |
| email        | string | User’s email address     |
| gst          | string | GST Number               |
| businessName | string | Business Name            |
| address      | string | Business Address         |

</details>

<details>
<summary>Response</summary>

- ✅ `200 OK` → Certificate sent successfully  
- ❌ `4xx/5xx` → Error messages  

</details>

---

## ▶️ Run Project

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```
## 📧 Email Setup & Environment Variables

Create a `.env` file in the `backend` folder to store your email credentials and backend port:

```env
# Your Gmail address
EMAIL=your_email@gmail.com

# Your Gmail App Password
EMAIL_PASS=your_gmail_app_password

# Backend server port
PORT=9000
```

### 🔑 How to Generate a Gmail App Password

Follow these steps to create an App Password for your Gmail account:

1. Go to your Google Account: [https://myaccount.google.com/](https://myaccount.google.com/)
2. Navigate to **Security → App passwords**.
3. Select **Mail** as the app and **Other (Custom name)** as the device.
4. Click **Generate**.
5. Copy the generated password and use it as `EMAIL_PASS` in your `.env` file:


EMAIL_PASS=your_generated_app_password
