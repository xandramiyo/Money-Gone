const express = require('express');
const router = express.Router();
const entriesCtrl = require('../../controllers/api/entries');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/', entriesCtrl.create)
router.get('/', entriesCtrl.index)

module.exports = router;