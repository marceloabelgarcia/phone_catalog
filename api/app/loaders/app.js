/**
 * Module dependencies.
 */
const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());

// Allow Cross-Origin requests
app.use(cors());

// Routes
const phonesRoutes = require("../api/routes/phonesRoutes");
app.use("/api/phones", phonesRoutes);

// Static serve
var path = require("path");
app.use(express.static(path.resolve("app/views/")));

app.all("*", (_req, res) => {
  try {
    res.sendFile(path.resolve("app/views/index.html"));
  } catch (error) {
    res.json({ success: false, message: "Something went wrong" });
  }
});

module.exports = app;

global.mainWindow = {
  webContents: {
    send: (e, d) => {
      console.log("webContents:", e, d);
    },
  },
};
