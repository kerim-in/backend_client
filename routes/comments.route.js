const express = require("express");
const router = express.Router();
const controller = require('../controllers/controller-comments.controller')



router.get('/',controller.commentsClientId)
router.get("/comments/:id", controller.commentsClientAll);
router.post("/comments/:id", controller.postComments);
router.patch("/comments/:id", controller.patchComments);
router.delete("/comments/:id", controller.removeComments);

module.exports = router;
