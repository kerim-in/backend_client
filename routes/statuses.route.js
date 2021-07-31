const { statusControllers } = require('../controllers/statuses.controller');

const express = require('express')
const router = express.Router()

router.get('/status', statusControllers.statusAll)
router.post('/status', statusControllers.statusPost)


module.exports = router