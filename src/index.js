require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const employeRouter = require("./routes/employe.routes");

const app = express();
app.use(express.json())
let mongooseurl = process.env.MONGODB_URL;

mongoose.connect(mongooseurl);

const db = mongoose.connection;

db.on(
  "error",
  console.error.bind(console, (err) => {
    logError(err);
  })
);

//the argument will not done it will be open
db.once("open", function () {
  console.log("Mongodb connected....!");
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Api is Working.....!" });
});

app.use("/employe", employeRouter);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
