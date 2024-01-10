const Riddles = require("./riddles");
const User = require("./User");
const PlayerProgress = require("./PlayerProgress");

PlayerProgress.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Riddles, PlayerProgress };
