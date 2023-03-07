require('dotenv').config();
require('./config/database');

const Category = require('./models/category')

(async function() {
	await Category.deleteMany({});
	const categories = await Category.create([
	  {name: 'Bills', sortOrder: 10},
	  {name: 'Groceries', sortOrder: 20},
	  {name: 'Dine Out', sortOrder: 30},
	  {name: 'Household', sortOrder: 40},
	  {name: 'Misc Spending', sortOrder: 50},
	]);

  	process.exit()

})()