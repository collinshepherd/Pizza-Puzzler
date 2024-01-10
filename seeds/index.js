const sequelize = require("../config/connection");
const { User, Riddles } = require("../models");
const userData = require("./userData.json");
const riddleData = require("./riddleData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Riddles.bulkCreate(riddleData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
