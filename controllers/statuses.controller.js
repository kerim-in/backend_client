const Status = require('./../models/Status.model')

module.exports.statusControllers = {
  statusAll: async (req, res) => {
    try {

      const status = await Status.find({})
      return res.json(status)

    } catch (e) {
      console.log(e)
    }
  },


  statusPost: async (req, res) => {
    const { status, color } = req.body;

    if(!status) {
       return res.json({
        error: 'Статус не указан'
      })
    }
    if (!color){
      return res.json({
        error: 'Цвет не указан'
      })
    }
    try {
      const status = new Status({...req.body})
      await status.save()
      return res.json(status)

    } catch (e) {
      console.log(e)
    }
  },
}