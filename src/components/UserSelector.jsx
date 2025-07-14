import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserSelector.css";

const API = "https://leaderboard-5.onrender.com";

function UserSelector() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    axios.get(`${API}/users`).then((res) => setUsers(res.data));
  }, []);

  const claimPoints = async () => {
    if (!selected) return;
    await axios.post(`${API}/claim/${selected}`);
    window.location.reload();
  };

  return (
    <div className="user-selector-container">
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="">-- Select User --</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
      <button onClick={claimPoints}>🎯 Claim Points</button>
    </div>
  );
}

export default UserSelector;
