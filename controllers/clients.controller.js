const Client = require("../models/Client.model");

module.exports.clientsController = {
  clientGetAll: async (req, res) => {
    try {
      const client = await Client.aggregate([
        {
          $lookup: {
            from: "comments",
            as: "comments",
            let: { client: "$_id" },
            pipeline: [{ $match: { $expr: { $eq: ["$client", "$$client"] } } }],
          },
        },
        {
          $lookup: {
            from: "comments",
            as: "lastComments",
            let: { client: "$_id" },
            pipeline: [
              { $match: { $expr: { $eq: ["$client", "$$client"] } } },
              { $sort: { createdAt: -1 } },
              { $limit: 1 },
            ],
          },
        },
        {
          $project: {
            _id: 1,
            firstName: 1,
            lastName: 1,
            patronymic: 1,
            comments: 1,
            img: 1,
            lastComments: 1,
          },
        },
        {
          $unwind: { path: "$lastComments", preserveNullAndEmptyArrays: true },
        },
      ]);
      res.json(client);
    } catch (e) {
      console.log(e);
    }
  },
  clientGetId: async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
      const client  = await Client.findById(id);
      if (!client){
        return
      }
      res.json(client);
    } catch (e) {
      console.log(e);
    }
  },

  clientPost: async (req, res) => {
    try {
      const { lastName,firstName,  patronymic, img } = req.body;
        const client = await Client.create({
          firstName,
          lastName,
          patronymic,
          img,
        })
      if (!firstName){
        return res.json({
          error: "Фамилия не найдено не найдено "
        })
      }
      if (!lastName){
        return res.json({
          error: "Имя не найдено "
        })
      }
      if (!patronymic){
        return res.json({
          error: "Отчество не найдено "
        })
      }
      if (!img){
        return res.json({
          error: "img не найдено "
        })
      }

      res.json(client);
    } catch (e) {
      console.log(e);
    }
  },

  clientPatch: async (req, res) => {
    try {
      const client = await Client.findByIdAndUpdate(req.params.id, req.body);
      res.json(client);
    } catch (e) {
      console.log(e);
    }
  },

  clientDelete: async (req, res) => {
    const { id } = req.params;

    try {
      const client = await Client.findByIdAndDelete({ _id: id });
      res.json(client);
    } catch (e) {
      console.log(e);
    }
  },
};
