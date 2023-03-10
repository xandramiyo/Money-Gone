const Income = require('../../models/income')

module.exports = {
    create,
	index,
	deleteIncome,
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

async function deleteIncome(req, res) {
	try {
		const deletedIncome = await Income.findOneAndDelete({_id: req.params.id, userRecommending: req.user._id})
		console.log(deletedIncome)
		res.json(deletedIncome)
	} catch(err) {
		console.log(err)
		res.status(400).json(err)
	}
}