const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    amount: {
        type: Number,
        required: true
    },
    user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
})

module.exports = mongoose.model('Income', incomeSchema)