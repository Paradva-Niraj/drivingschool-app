# 🚗 Driving School Management System

A full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This project is aimed at managing a driving school — including admin registrations, user logins, and role-based dashboards.

---

I done many thing in last 5 days like requirement designing and many other things!

### 📅 June 7, 2025 — **Day 1** -> i edit readme 

**Backend Setup:**

**Authentication Features:**
- Created `/adminregister` route
  - Collected `username`, `email`, `password`, `role`, etc.
  - Hashed password with `bcryptjs`
- Created `/adminlogin` route
  - admin send mail and password authenticate and send jws 
  - Generated JWT token with 7-day expiration

**Mongoose Schema:**
- Defined `admin` schema with fields:
  - `username`, `email`, `password`, `isactive`, `lastlogin`, `role`


**Frontend Work (React):**
- Set up React login component (`Login.jsx`)
- Created form with `email`, `password`, and `role`
- Used Axios to send login request
- Stored token and role in `localStorage`
- Redirected to `/dashboard` after login

---

## 🚀 Tech Stack

- **Frontend:** React, Axios, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Auth:** JWT, bcryptjs
- **Dev Tools:** nodemon, dotenv

---

## 🔒 Authentication Logic

- Passwords are hashed using `bcrypt`
- Login route checks email and password, returns JWT
- JWT includes user ID and role, expires in 7 days
- Role also returned in response for frontend use

## loading ui
- any page are loading videa a loading a component like styling.

## 📦 How to Run

```bash
# Backend
npm install
npm run dev  # uses nodemon

# Frontend (assumes Vite setup)
cd frontend
npm install
npm run dev
