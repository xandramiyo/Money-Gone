const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	notes: {
		type: String
	},
	cost: {
		type: Number,
		required: true
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category',
		required: true,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
},{
	timestamps: true,
	toJSON: { virtuals: true }
})

module.exports = mongoose.model('Entry', entrySchema)