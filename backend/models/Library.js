const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let librarySchema = new Schema(
  {
    id_customer: {
      type: Object,
    },
    id_game: {
      type: Object,
    },
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
    collection: "customer-games",
  }
);

module.exports = mongoose.model("Library", librarySchema);
