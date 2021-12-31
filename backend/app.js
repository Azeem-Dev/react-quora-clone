const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/index");
// Middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Cors
app.use((req, res, next) => {
  req.header("access-control-allow-origin", "*");
  req.header("access-control-allow-headers", "*");
  next();
});

// Routes

app.use("/api", router);

app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use("/uploads", express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "/../frontend/build/index.html"));
  } catch (e) {
    res.send("Ooops Unhadeled Error occured");
  }
});

app.use(cors());

module.exports = app;
