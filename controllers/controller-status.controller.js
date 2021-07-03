const Status = require('../models/Comments.model')

const controllers = {
  statusAll: async (req, res) => {
    try {
      const status = await Status.find({})
      res.json(status)
    }
    catch (e) {
      console.log(e)
    }
  },
  statusPost: async (req, res) => {
    try {
      const status = await Status.findById(req.params.id)
      res.json(status)
    }
    catch (e) {
      console.log(e)
    }
  },
}

module.exports = controllers