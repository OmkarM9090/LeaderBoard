# 🔥 Live Leaderboard – Leadership App

An interactive full-stack Leaderboard Tracking System built using the **MERN stack** (MongoDB, Express, React, Node).  
Users can be added, claim points, and view real-time rankings with a clean and responsive UI.

---

## 📸 Preview

- 🧾 Add User & Claim Points  
- 🏆 Leaderboard Rankings  
- 📜 Claim History with Reset  

---

## 🔗 Live Links

- **Frontend Live URL** 👉 [https://leadership-app-frontend.vercel.app](https://leader-board-pi.vercel.app/)  
- **Backend API URL** 👉 [https://leadership-api.onrender.com](https://leaderboard-5.onrender.com)

---

## 🧰 Tech Stack

| Frontend      | Backend         | Database     |
|---------------|------------------|--------------|
| React (Vite)  | Express.js       | MongoDB Atlas |
| Axios         | CORS, Dotenv     |              |
| React Icons   | Multer (file ops)|              |

---
## file format
LEADERSHIP/
├── backend/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   └── my-app/
│       ├── public/
│       │   └── index.html
│       │
│       ├── src/
│       │   ├── assets/
│       │   ├── components/
│       │   │   ├── AddUser.jsx / AddUser.css
│       │   │   ├── ClaimButton.jsx
│       │   │   ├── ClaimHistory.jsx / ClaimHistory.css
│       │   │   ├── Leaderboard.jsx / Leaderboard.css
│       │   │   ├── UserSelector.jsx / UserSelector.css
│       │   │
│       │   ├── App.jsx / App.css
│       │   ├── index.css
│       │   └── main.jsx
│
├── README.md




---

## 🛠️ Installation & Run

### ✅ Frontend Setup

```bash
npm create vite@latest my-app --template react
cd my-app
npm install
npm i react-router-dom react-icons axios
npm run dev
✅ Backend Setup
bash
Copy
Edit
cd backend
npm install express cors dotenv multer mongodb
node server.js
Make sure MongoDB is running locally or you’ve configured your .env file properly:


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
