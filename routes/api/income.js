const express = require('express');
const router = express.Router();
const incomeCtrl = require('../../controllers/api/income');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/', ensureLoggedIn, incomeCtrl.create)
router.get('/', ensureLoggedIn, incomeCtrl.index)
router.delete('/:id/delete', ensureLoggedIn, incomeCtrl.deleteIncome)

module.exports = router;