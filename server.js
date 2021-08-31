const express = require("express");

const cors = require("cors");

const axios = require("axios");

require("dotenv").config();
  
const app = express();
const PORT = process.env.PORT;
const getData=require('./controlloers/getData.controller')
const {addCrypto,getUserData,updateUserData,deleteUserData}=require('./controlloers/db')
app.use(cors());
app.use(express.json())

app.use(express.json());

app.get("/", getData);
app.post("/user/:email", addCrypto);
app.get("/userData/:email", getUserData);
app.put("/upadte/:id", updateUserData);
app.delete("/delete/:id", deleteUserData);

app.listen(PORT, () => console.log(`listining on port ${PORT}`));
