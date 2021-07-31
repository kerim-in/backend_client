const { CommentsController } = require('../controllers/comments.controller');

const express = require("express");
const router = express.Router();




router.get('/comments',CommentsController.getAllComments)
router.get("/comments/:id", CommentsController.getAllCommentsById);
router.get("/clients/:id/comments", CommentsController.getAllCommentsByClientId);
router.post("/comments/:client/comments", CommentsController.postComments);
router.patch("/comments/:id", CommentsController.patchComments);
router.delete("/comments/:id", CommentsController.removeComments);


module.exports = router;
