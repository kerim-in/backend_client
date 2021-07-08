const express = require('express')
const router = express.Router()
const controller = require('./../controllers/status.controller')

router.get('/status', controller.statusAll)
router.post('/status', controller.statusPost)


module.exports = router