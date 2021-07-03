const {Schema, model} = require('mongoose')

const commentSchema = new Schema({

    comment   :{
      type: String
    },
    client:{
      ref:"Client",
      type: Schema.Types.ObjectId
    },
    status:{
      ref:"Status",
      type: Schema.Types.ObjectId
    },
  },
  {timestamps:true}
)

const Comment = model('Comment', commentSchema)

module.exports = Comment