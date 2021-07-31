const Comment = require("../models/Comment.model");

module.exports.CommentsController = {
  getAllComments: async (req, res) => {
    try {
      const comments = await Comment.find({});
      res.json(comments);
    } catch (e) {
      console.log(e);
    }
  },
  getAllCommentsById: async (req, res) => {
    const { id } = req.params;
    try {
      const comment = await Comment.findById(id);
      if (!comment) {
        return res.json({
          error: "соментарии с таким ID не нандено",
        });
      }
      return res.json(comment);
    } catch (e) {
      console.log(e);
    }
  },

  getAllCommentsByClientId: async (req, res) => {
    const { id } = req.params;
    try {
      const comment = await Comment.find({ client: id });
      if (!comment) {
        return res.json({
          error: "соментарии с таким ID не нандено",
        });
      }
      return res.json(comment);
    } catch (e) {
      console.log(e);
    }
  },

  postComments: async (req, res) => {
    try {
      const {client} = req.params
      const { comment, status } = req.body;
      const comments = await Comment.create({
        comment,
        client,
        status,
      });
      if (!comment){
        return res.json({
          error: "Коммент не найден"
        })
      }
      if (!client){
        return res.json({
          error: "Клиент  не найден"
        })
      }
      if (!status){
        return res.json({
          error: "Статус не найден"
        })
      }
      res.json(comments);
    } catch (e) {
      console.log(e);
    }
  },

  patchComments: async (req, res) => {
    try {
      const comments = await Comment.findByIdAndUpdate(req.params.id, req.body);
      res.json(comments);
    } catch (e) {
      console.log(e);
    }
  },

  removeComments: async (req, res) => {
    try {
      const { id } = req.params;
      const comments = await Comment.findByIdAndDelete({ _id: id });
      res.json(comments);
    } catch (e) {
    }
  },
};
