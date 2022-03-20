const express = require("express");
const app = express();
const errMiddleware = require("./middleWare/error");
const cors = require("cors");
const emplRoutes = require("./Routes/employRoutes.js");

//middlewares
app.use(express.json());

//middleware for error
app.use(errMiddleware);
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// routs middleware
app.use("/api/v1", emplRoutes);

module.exports = app;
