const Riddles = require("./riddles");
const User = require("./User");
const Pizza = require("./Pizza");

User.hasMany(Pizza, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Pizza.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = { User, Riddles, Pizza };
