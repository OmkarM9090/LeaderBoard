🔥 Live Leaderboard – Leadership App
An interactive full-stack Leaderboard Tracking System built using the MERN stack (MongoDB, Express, React, Node). Users can be added, claim points, and view real-time rankings with a clean and responsive UI.

📸 Preview
🧾 Add User & Claim Points

🏆 Leaderboard Rankings

📜 Claim History with Reset

---

🔗 Live Links
Frontend Live URL 👉 https://leadership-app-frontend.vercel.app

Backend API URL 👉 https://leadership-api.onrender.com

---
🧰 Tech Stack
Frontend	Backend	Database
React (Vite)	Express.js	MongoDB
Axios	CORS, Dotenv	
React Icons	Multer (for file ops)	

---
🗂️ Folder Structure

LEADERSHIP/
│
├── backend/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/my-app/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddUser.jsx / .css
│   │   │   ├── ClaimButton.jsx
│   │   │   ├── ClaimHistory.jsx / .css
│   │   │   ├── Leaderboard.jsx / .css
│   │   │   ├── UserSelector.jsx / .css
│   │   ├── App.jsx / App.css
│   │   └── index.css / main.jsx
│   └── public/index.html
│
├── README.md

---
🛠️ Installation & Run
✅ Frontend Setup

npm create vite@latest my-app --template react
cd my-app
npm install
npm i react-router-dom react-icons axios
npm run dev
✅ Backend Setup

cd backend
npm install express cors dotenv multer mongodb
node server.js
Make sure MongoDB is running locally or you’ve configured your .env with MongoDB Atlas URI:

---

PORT=3000
💡 Features
🔹 Add users dynamically

🔹 Claim points by selecting user

🔹 Live leaderboard rankings

🔹 Claim history log with real timestamps

🔹 Reset all points & history (admin feature)

🔹 Mobile responsive & animated UI

📌 Future Enhancements (Optional)
✅ Add user avatars

✅ Set custom points instead of random

✅ Authentication (Admin vs Regular users)

✅ Export leaderboard to PDF or Excel

👨‍💻 Developer
Omkar Mahadik
📍 India
