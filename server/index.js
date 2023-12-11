//----REQUIRE ALL FILES/PKGS-------
const express = require("express");
const cors = require("cors");
const { getCompliment, getFortune, createGoal, deleteGoal, getGoals, updateStatus } = require('./controller')

//------CONFIGURE THE SERVER------
const app = express();
app.use(cors());
app.use(express.json());


//------ENDPOINTS-------


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/goals", getGoals)
app.post("/api/goals", createGoal)
app.put("/api/update-status", updateStatus)
app.delete("/api/goals/:id", deleteGoal)

//--------LISTEN----------
app.listen(4000, () => console.log("Server running on 4000"));
