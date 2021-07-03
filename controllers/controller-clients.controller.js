const Client = require("../models/Client.model");

const controllers = {
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
          $project: {
            _id: 1,
            firstName: 1,
            lastName: 1,
            patronymic: 1,
            img: 1,
          },
        },
      ]);
      res.json(client);
    } catch (e) {
      console.log(e);
    }
  },
  clientGetId: async (req, res) => {
    try {
      const client = await Client.findById(req.params.id);
      res.json(client);
    } catch (e) {
      console.log(e);
    }
  },

  clientPost: async (req, res) => {
    try {
      const client = new Client({ ...req.body });
      await client.save();
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
    try {
      const id = req.params.id;
      const client = await Client.findByIdAndDelete({ _id: id });
      res.json(client);
    } catch (e) {
      console.log(e);
    }
  },
};
module.exports = controllers;
