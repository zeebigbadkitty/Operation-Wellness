const db = require('../config/connection');
const { Drugs } = require('../models');
const drugSeeds = require('./drugsjson.json');

db.once('open', async () => {
  try {
    await Drugs.deleteMany({});
    await Drugs.create(drugSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
