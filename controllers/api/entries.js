const Entry = require('../../models/entry')
const Category = require('../../models/category')

module.exports = {
    create,
	index,
	edit,
	deleteEntry,
}

async function create(req, res) {
	try {
		const category = await Category.findById(req.body.category)
		const entry = await Entry.create({
			name: req.body.name,
			category: category._id,
			cost: req.body.cost,
			notes: req.body.notes,
			user: req.body.user,
			date: req.body.date,
		})
		category.entries.push(entry._id)
		await category.save()
		let popCategory = await entry.populate('category')
		let popEntries = await popCategory.category.populate('entries')
		res.json(await entry.populate('category'))
	} catch(err) {
		console.log(err)
		res.status(400).json(err)
	}
}

async function index(req, res) {
	const entries = await Entry.find({user: req.user._id}).populate('category')
	res.json(entries)
}

async function edit(req, res) {
    try {
		const category = await Category.findById(req.body.category)
        const id = req.params.id;
        const update = {
            name: req.body.name,
            category: category,
            cost: req.body.cost,
            notes: req.body.notes
        };

        const updatedEntry = await Entry.findByIdAndUpdate(
            id,
            update,
            { new: true }
        );
        res.json(await updatedEntry.populate('category'));
    } catch (err) {
		console.log(err)
        res.status(400).json(err);
    }
}

async function deleteEntry(req, res) {
	try {
		const deletedEntry = await Entry.findOneAndDelete({_id: req.params.id, userRecommending: req.user._id})
		res.json(await deletedEntry.populate('category'))
	} catch(err) {
		console.log(err)
		res.status(400).json(err)
	}
}