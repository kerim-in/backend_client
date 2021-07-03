const Coment = require('../models/Comments.model')

const controllers = {
  commentsClientAll: async (req, res)=> {
    try {
      const comments = await Coment.find({})
      res.json(comments)
    }catch (e) {
      console.log(e)
    }
  },
  commentsClientId: async (req, res)=> {
    try {
      const comments = await Coment.findById(req.params.id)
      res.json(comments)
    }catch (e) {
      console.log(e)
    }
  },

  postComments: async (req, res)=> {
    try {
      const comments = new Coment({ ...req.body })
      await comments.save()
      res.json(comments)
    }catch (e) {
      console.log(e)
    }
  },

  patchComments: async (req, res)=> {
    try {
      const comments = await Coment.findByIdAndUpdate(req.params.id, req.body)
      res.json(comments)
    }catch (e) {
      console.log(e)
    }
  },

  removeComments: async (req, res)=> {
    try {
      const id = req.params.id
      const comments = await Coment.findByIdAndDelete({ _id: id })
      res.json(comments)
    }catch (e) {
      console.log(e)
    }
  }

}
module.exports = controllers