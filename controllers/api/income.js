const Income = require('../../models/income')

module.exports = {
    create,
	index,
}

async function create(req, res) {
	try {
		const incomeEntry = new Income({
			date: req.body.date,
			amount: req.body.amount,
			user: req.body.user,
		})
		const newIncomeEntry = await incomeEntry.save()
		res.json(newIncomeEntry)
	} catch(err) {
		console.log(err)
		res.status(400).json(err)
	}
}

async function index(req, res) {
	const incomeEntries = await Income.find({user: req.user._id})
	res.json(incomeEntries)
}