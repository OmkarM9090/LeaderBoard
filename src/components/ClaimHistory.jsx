import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ClaimHistory.css"; 

const API = "https://leaderboard-5.onrender.com";

function ClaimHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get(`${API}/history`).then((res) => setHistory(res.data));
  }, []);

  return (
    <div className="claim-history-container">
      <h2>📜 Claim History</h2>
      <button className="reset-btn" onClick={async () => {
  if (window.confirm("Are you sure you want to reset the claim history?")) {
    await axios.delete(`${API}/reset-history`);
    window.location.reload();
  }
}}>🔁 Reset History</button>
      <ul className="claim-history-list">
        {history.map((h, idx) => (
  <li key={idx}>
    User: <strong>{h.userName}</strong>, 
    Points: <strong>{h.pointsClaimed}</strong>, 
    Time: <strong>{new Date(h.claimedAt).toLocaleString()}</strong>
  </li>
))}

      </ul>
    </div>


  );
}

export default ClaimHistory;
