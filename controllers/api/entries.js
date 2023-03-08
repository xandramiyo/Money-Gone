const User = require('../../models/user')
const Entry = require('../../models/entry')

module.exports = {
    create,
	index,
	edit,
	deleteEntry,
}

async function create(req, res) {
	try {
		const entry = new Entry({
			name: req.body.name,
			category: req.body.category,
			cost: req.body.cost,
			notes: req.body.notes,
			user: req.body.user,
			date: req.body.date,
		})
		const newEntry = await entry.save()
		res.json(newEntry)
		console.log(req.body.date)
	} catch(err) {
		res.status(400).json(err)
	}
}

async function index(req, res) {
	const entries = await Entry.find({user: req.user._id})
	res.json(entries)
}

async function edit(req, res) {
	const editedEntry = await Entry.findOne({_id: req.params.id})
	console.log(res.json(editedEntry))
}

async function deleteEntry(req, res) {
	try {
		const deletedEntry = await Entry.findOneAndDelete({_id: req.params.id, userRecommending: req.user._id})
		res.json(deletedEntry)
	} catch(err) {
		console.log(err)
		res.status(400).json(err)
	}
}