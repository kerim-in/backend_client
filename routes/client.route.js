

const express = require("express");

const router = express.Router();
const {clientsController} = require('../controllers/clients.controller')


router.get("/clients", clientsController.clientGetAll);
router.get("/clients/:id", clientsController.clientGetId);
router.post("/clients", clientsController.clientPost);
router.patch("/clients/:id", clientsController.clientPatch);
router.delete("/clients/:id", clientsController.clientDelete);

module.exports = router;
