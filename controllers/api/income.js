const Income = require('../../models/income')

module.exports = {
    create,
}

async function create(req, res) {
	try {
		const incomeEntry = new Income({
			date: req.body.date,
			amount: req.body.amount,
			user: req.body.user,
		})
		const newIncomeEntry = await incomeEntry.save()
		console.log(res.json(newIncomeEntry))
	} catch(err) {
		console.log(err)
		res.status(400).json(err)
	}
}