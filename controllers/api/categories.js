const Category = require('../../models/category')

module.exports = {
	index,
}

async function index(req, res) {
	const categories = await Category.find({}).populate('entries')
	console.log('hi', categories)
	res.json(categories)
}