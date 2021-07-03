const express = require("express");
const router = express.Router();
const controller = require('../controllers/controller-clients.controller')


router.get("/", controller.clientGetAll);
router.get("/client/:id", controller.clientGetId);
router.post("/client", controller.clientPost);
router.patch("/client/:id", controller.clientPatch);
router.delete("/client/:id", controller.clientDelete);

module.exports = router;
