const db = require('../config/connection');
const { Drugs } = require('../models');
const drugSeeds = require('./drugs2.json');

db.once('open', async () => {
  try {
    await Drugs.deleteMany({}); //if we're using multiple files, remove this.
    await Drugs.create(drugSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }

  const drugs = await Drugs.insertMany(drugSeeds);
});
