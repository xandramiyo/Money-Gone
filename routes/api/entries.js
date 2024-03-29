const express = require('express');
const router = express.Router();
const entriesCtrl = require('../../controllers/api/entries');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/', ensureLoggedIn, entriesCtrl.create)
router.get('/', entriesCtrl.index)
router.put('/:id/edit', ensureLoggedIn, entriesCtrl.edit)
router.delete('/:id/delete', ensureLoggedIn, entriesCtrl.deleteEntry)

module.exports = router;