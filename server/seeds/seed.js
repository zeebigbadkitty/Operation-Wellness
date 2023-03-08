const db = require('../config/connection');
const { Drug, User } = require('../models');
const drugSeeds = require('./drugs2.json');
const userSeeds = require('./userData.json');
const bcrypt = require('bcrypt');

db.once('open', async () => {
  console.log('hello')
  try {
    await Drug.collection.drop();
    await Drug.create(drugSeeds);
    await User.deleteMany({}); // remove all existing user data
    for (const userData of userSeeds) {
      const saltRounds = 10;
      const passwordHash = await bcrypt.hash(userData.password, saltRounds);
      const user = {
        name: userData.name,
        email: userData.email,
        password: passwordHash,
        user_admin: userData.user_admin,
        savedDrugs: userData.savedDrugs
      };

      await User.create(user);
    }
    console.log('User data seeded successfully!');
    console.log('all done!');
   
  } catch (err) {
    throw err;
  }
  process.exit(0);
  const drugs = await Drugs.insertMany(drugSeeds);
});
