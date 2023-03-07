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
		type: String,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
},{
	timestamps: true,
})

module.exports = mongoose.model('Entry', entrySchema)