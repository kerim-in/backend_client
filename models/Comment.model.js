const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    client: {
      ref: "Client",
      type: Schema.Types.ObjectId,
      required: true
    },
    status: {
      ref: "Status",
      type: Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
