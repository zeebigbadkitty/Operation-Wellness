const db = require('../config/connection');
const { Drugs } = require('../models');
const drugSeeds = require('./drugs2.json');

db.once('open', async () => {
  console.log('hello')
  try {
    await Drugs.collection.drop(); //if we're using multiple files, remove this.
    await Drugs.create(drugSeeds);

    console.log('all done!');
   
  } catch (err) {
    throw err;
  }
  process.exit(0);
  const drugs = await Drugs.insertMany(drugSeeds);
});
