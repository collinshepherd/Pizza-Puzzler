const { Model, DataTypes, INTEGER } = require("sequelize");
const sequelize = require("../config/connection");

class PlayerProgress extends Model {}

PlayerProgress.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      references: {
        model: "User",
        foreignKey: "id",
      },
    },
    stateObject: {
      type: DataTypes.JSON,
      defaultValue: this.defaultPlayerProgress,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "PlayerProgress",
  }
);

PlayerProgress.defaultPlayerProgress = {
  mapId: "Kitchen",
  startingHeroX: 160,
  startingHeroY: 80,
  startingHeroDirection: "down",
  playerState: {
    pizzas: {
      p1: {
        pizzaId: "s001",
        hp: 50,
        maxHp: 50,
        xp: 0,
        maxXp: 100,
        level: 1,
        status: null,
      },
    },
    lineup: ["p1"],
    items: [
      { actionId: "item_recoverHp", instanceId: "item1" },
      { actionId: "item_recoverHp", instanceId: "item2" },
      { actionId: "item_recoverHp", instanceId: "item3" },
    ],
    storyFlags: {},
  },
};

module.exports = PlayerProgress;
