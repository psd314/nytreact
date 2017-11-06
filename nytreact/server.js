const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));
app.use(routes);

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

app.get("/saved", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.post("/saved", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.delete("/saved", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
