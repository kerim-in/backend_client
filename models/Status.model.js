const { Schema, model } = require("mongoose");

const statusSchema = new Schema(
  {
    status: {
      type: String,
      required: true,
      unique: true
    },
    color: {
      type: String,
      required: true,
      unique: true
    },
  },
  { timestamps: true }
);

const Status = model("Status", statusSchema);

module.exports = Status;
