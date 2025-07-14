


const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGO_URL);
let db;

(async () => {
  try {
    await client.connect();
    db = client.db("leaderboard");
    console.log("✅ MongoDB Connected");

    
    app.get("/", (req, res) => {
      res.send("Server is running ✅");
    });

    // Add a new user
    app.post("/add-user", (req, res) => {
      const { name } = req.body;
      const user = { name, totalPoints: 0 };
      db.collection("users").insertOne(user)
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err));
    });

    // Get sorted users
    app.get("/users", (req, res) => {
      db.collection("users").find().sort({ totalPoints: -1 }).toArray()
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err));
    });

    // Claim random points
    app.post("/claim/:userId", async (req, res) => {
      try {
        const userId = req.params.userId;
        const _id = new ObjectId(userId);
        const points = Math.floor(Math.random() * 10) + 1;

        await db.collection("users").updateOne(
          { _id },
          { $inc: { totalPoints: points } }
        );

        await db.collection("claimHistory").insertOne({
          userId: _id,
          pointsClaimed: points,
          claimedAt: new Date()
        });

        const updated = await db.collection("users").findOne({ _id });
        res.send({ user: updated.name, totalPoints: updated.totalPoints, points });
      } catch (err) {
        res.status(500).send(err);
      }
    });

    //  Claim history with user names
    app.get("/history", async (req, res) => {
      try {
        const history = await db.collection("claimHistory").aggregate([
          {
            $lookup: {
              from: "users",
              localField: "userId",
              foreignField: "_id",
              as: "user"
            }
          },
          { $unwind: "$user" },
          {
            $project: {
              _id: 0,
              userName: "$user.name",
              pointsClaimed: 1,
              claimedAt: 1
            }
          },
          { $sort: { claimedAt: -1 } }
        ]).toArray();

        res.send(history);
      } catch (err) {
        res.status(500).send(err);
      }
    });

    //  Reset claim history
    app.delete("/reset-history", async (req, res) => {
      try {
        await db.collection("claimHistory").deleteMany({});
        res.send({ message: "Claim history reset successfully." });
      } catch (err) {
        res.status(500).send({ error: "Error resetting history." });
      }
    });

    // Reset user points
    app.put("/reset-user-points", async (req, res) => {
      try {
        await db.collection("users").updateMany({}, { $set: { totalPoints: 0 } });
        res.send({ message: "All user points reset successfully." });
      } catch (err) {
        res.status(500).send({ error: "Error resetting user points." });
      }
    });

    //  Start server
    app.listen(3000, () =>
      console.log("🚀 Server running on http://localhost:3000")
    );

  } catch (err) {
    console.error("❌ MongoDB connection error", err);
  }
})();
