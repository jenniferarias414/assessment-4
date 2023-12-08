//----REQUIRE ALL FILES/PKGS-------
const express = require("express");
const cors = require("cors");
const { getCompliment, getFortune } = require('./controller')

//------CONFIGURE THE SERVER------
const app = express();
app.use(cors());
app.use(express.json());


//------ENDPOINTS-------


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)

//--------LISTEN----------
app.listen(4000, () => console.log("Server running on 4000"));
