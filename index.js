const express = require("express");
require("dotenv").config();
const app = express();
const port = 8000;
const cors = require("cors");
//middleware
const db = require("./config/mongoose");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", require("./routes"));
app.listen(port, function (err) {
  if (err) {
    console.log("err is connectin", err);
    return;
  } else {
    console.log("server is running", port);
  }
});
