import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Leaderboard.css"; 

const API = "https://leaderboard-5.onrender.com";

function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${API}/users`).then((res) => setUsers(res.data));
  }, []);
  
  const handleReset = async () => {
  if (window.confirm("Are you sure you want to reset all user points?")) {
    await axios.put(`${API}/reset-user-points`);
    window.location.reload();
  }
};

  return (
    <div className="leaderboard-container">
      <h2>🏆 Leaderboard</h2>
      <button className="reset-button" onClick={handleReset}>
  🔄 Reset All Points
</button>


      <ul className="leaderboard-list">
        {users.map((user, index) => (
          <li key={user._id}>
            #{index + 1} — {user.name}: {user.totalPoints} points
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
