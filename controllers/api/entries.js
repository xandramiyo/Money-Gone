const User = require('../../models/user')
const Entry = require('../../models/entry')

module.exports = {
    create,
	index
}

async function create(req, res) {
	try {
		const entry = new Entry({
			name: req.body.name,
			category: req.body.category,
			cost: req.body.cost,
			user: req.body.user,
			date: req.body.date,
		})
		const newEntry = await entry.save()
		res.json(newEntry)
		console.log(newEntry)
	} catch(err) {
		res.status(400).json(err)
	}
}

async function index(req, res) {
	const entries = await Entry.find({user: req.user.id})
	res.json(entries)
}