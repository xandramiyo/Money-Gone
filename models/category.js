const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	entries: [{
		type: Schema.Types.ObjectId,
		ref: 'Entry',
	}]
})

module.exports = mongoose.model('Category', categorySchema)