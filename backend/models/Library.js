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
  },
  {
    collection: "customer-games",
  }
);

module.exports = mongoose.model("Library", librarySchema);
