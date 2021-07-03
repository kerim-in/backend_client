const { Router } = require('express')
const router = Router()

router.use(require('./client.route'))
router.use(require('./comments.route'))
router.use(require('./status.route'))


module.exports = router