const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let gameSchema = new Schema(
  {
    name: {
      type: String,
    },
    category: {
      type: String,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    producer: {
      type: String,
    },
  },
  {
    collection: "games",
  }
);

module.exports = mongoose.model("Game", gameSchema);
