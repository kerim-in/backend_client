const { Schema, model } = require("mongoose");

const clientSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    patronymic: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required:true
    },
  },
  { timestamps: true }
);

const Client = model("Client", clientSchema);
module.exports = Client;
