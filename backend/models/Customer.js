const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let customerSchema = new Schema(
  {
    name: {
      type: String,
    },
    category: {
      type: String,
    },
    birthdate: {
      type: Date,
    },
    user: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    collection: "customers",
  }
);

module.exports = mongoose.model("Customer", customerSchema);
