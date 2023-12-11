require("dotenv").config();
const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db
require("./database/init.mongodb");
const { checkOverLoad } = require("./helpers/check.connect");
// checkOverLoad();

// init routes
app.use("", require("./routes/index"));

module.exports = app;
