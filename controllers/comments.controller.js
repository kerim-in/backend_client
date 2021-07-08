const Comment = require('../models/Comments.model')

const controllers = {
  commentsClientAll: async (req, res)=> {
    try {
      const comments = await Comment.find({})
      res.json(comments)
    }catch (e) {
      console.log(e)
    }
  },
  commentsClientId: async (req, res)=> {
    try {
      const comments = await Comment.findById(req.params.id)
      res.json(comments)
    }catch (e) {
      console.log(e)
    }
  },

  postComments: async (req, res)=> {
    try {
      const comments = new Comment({ ...req.body })
      await comments.save()
      res.json(comments)
    }catch (e) {
      console.log(e)
    }
  },

  patchComments: async (req, res)=> {
    try {
      const comments = await Comment.findByIdAndUpdate(req.params.id, req.body)
      res.json(comments)
    }catch (e) {
      console.log(e)
    }
  },

  removeComments: async (req, res)=> {
    try {
      const id = req.params.id
      const comments = await Comment.findByIdAndDelete({ _id: id })
      res.json(comments)
    }catch (e) {
      console.log(e)
    }
  }

}
module.exports = controllers