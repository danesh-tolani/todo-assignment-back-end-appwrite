require("dotenv").config();
const express = require("express");
const connectToDb = require("./config/db");
const app = express();
const todoRoutes = require("./routes/TodoRoutes");
const cookieParser = require("cookie-parser");

// Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

// Connect to DB
connectToDb();

// todo routes
app.use("/", todoRoutes);

module.exports = app;
