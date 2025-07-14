import React, { useState } from "react";
import axios from "axios";
import "./AddUser.css"; 

const API = "https://leaderboard-5.onrender.com";

function AddUser() {
  const [newUser, setNewUser] = useState("");

  const addUser = async () => {
    if (!newUser.trim()) return;
    await axios.post(`${API}/add-user`, { name: newUser });
    setNewUser("");
    window.location.reload();
  };

  return (
    <div className="add-user-container">
      <input
        placeholder="New user name"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button onClick={addUser}>➕ Add User</button>
    </div>
  );
}

export default AddUser;
