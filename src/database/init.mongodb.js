"use strict";

const { default: mongoose } = require("mongoose");
const { countConnect } = require("../helpers/check.connect");

const connectString =
  "mongodb+srv://Eden:xYXfI655HmoaR8ad@cluster0.w7wg2gp.mongodb.net/shopEden";

class Database {
  constructor() {
    this.connect();
  }

  // connect
  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString, { maxPoolSize: 100 })
      .then(() => {
        console.log("Connect Mongodb Success PRO", countConnect());
      })
      .catch(() => console.log("Connect Error"));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
