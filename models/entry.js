const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	Date: {
		type: Date,
		required: true,
	},
	Notes: {
		type: String
	},
	Cost: {
		type: Number,
		required: true
	},
	Category: {
		type: Schema.Types.ObjectId,
		ref: 'Category'
	},
	User: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
},{
	timestamps: true,
})

module.exports = mongoose.model('Entry', entrySchema)