const { Pizza } = require("./models");
const update = require("./public/js/game/GetNewData");

async function updateData(combatant) {
  // console.log("this file went off");
  // const playerState = window.playerState;
  // Object.keys(playerState.pizzas).forEach((id) => {
  //   const playerStatePizza = playerState.pizzas[id];
  //   const combatant = this.combatants[id];
  //   if (combatant) {
  //     playerStatePizza.hp = combatant.hp;
  //     playerStatePizza.xp = combatant.xp;
  //     playerStatePizza.maxXp = combatant.maxXp;
  //     playerStatePizza.level = combatant.level;
  //     Pizza.update(
  //       {
  //         hp: playerState.hp,
  //         xp: playerState.xp,
  //         maxXp: playerState.maxXp,
  //         level: playerState.level,
  //       },
  //       {
  //         where: {
  //           id: combatant,
  //         },
  //       }
  //     );
  //   }
  // });
  // playerState.items = playerState.items.filter((item) => {
  //   return !this.usedInstanceIds[item.instanceId];
  // });
  update();
}

module.exports = updateData;
