const Status = require('./../models/Status.model')

const controllers = {
  statusAll: async (req, res) => {
    try {

      const status = await Status.find({})
      res.json(status)

    } catch (e) {
      console.log(e)
    }
  },


  statusPost: async (req, res) => {
      
    try {
      const status = new Status({...req.body})
      await status.save()
      res.json(status)

    } catch (e) {
      console.log(e)
    }
  },
}

module.exports = controllers