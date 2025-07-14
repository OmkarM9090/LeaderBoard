// import React, { useState } from "react";
// import AddUser from "./components/AddUser";
// import UserSelector from "./components/UserSelector";
// import ClaimButton from "./components/ClaimButton";
// import Leaderboard from "./components/Leaderboard";
// import ClaimHistory from "./components/ClaimHistory";

// export default function App() {
//   const [selectedUser, setSelectedUser] = useState("");
  
//   const [lastClaimed, setLastClaimed] = useState(null);

//   return (
//     <div style={{ padding: 20, fontFamily: "Arial" }}>
//       <h2>🏆 Leaderboard App</h2>

//       <AddUser
        
//         // onUserAdded={() => window.location.reload()} // Refresh all components
//       />

//       <div style={{ marginTop: 20 }}>
//         <UserSelector selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
//         <ClaimButton selectedUser={selectedUser} onClaimed={setLastClaimed} />
//       </div>

//       {lastClaimed && (
//         <div style={{ marginTop: 10 }}>
//           🎉 {lastClaimed.user} got {lastClaimed.points} points! Total: {lastClaimed.totalPoints}
//         </div>
//       )}

//       <Leaderboard />
//       <ClaimHistory />
//     </div>
//   );
// }


import React from "react";
import AddUser from "./components/AddUser";
import UserSelector from "./components/UserSelector";
import Leaderboard from "./components/Leaderboard";
import ClaimHistory from "./components/ClaimHistory";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "30px", color: "#333" , fontFamily: '"Poppins", sans-serif'}}>
  🔥 Live Leaderboard
</h1>

      <AddUser />
      <UserSelector />
      <Leaderboard />
      <ClaimHistory />
    </div>
  );
}

export default App;
