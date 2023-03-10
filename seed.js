require('dotenv').config()
require('./config/database')
const Category = require('./models/category')

(async function() {
	await Category.deleteMany({});
        const categories = await Category.create([
          {name: 'Bills'},
          {name: 'Groceries'},
          {name: 'Dine Out'},
          {name: 'Household'},
          {name: 'Misc Spending'},
          {name: 'Savings'},
        ]);

        process.exit()

})()