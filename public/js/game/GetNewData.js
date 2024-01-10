async function update() {
  const playerState = window.playerState;
  Object.keys(playerState.pizzas).forEach((id) => {
    const playerStatePizza = playerState.pizzas[id];
    const combatant = this.combatants[id];
    if (combatant) {
      playerStatePizza.hp = combatant.hp;
      playerStatePizza.xp = combatant.xp;
      playerStatePizza.maxXp = combatant.maxXp;
      playerStatePizza.level = combatant.level;
    }
  });
  console.log(playerStatePizza);
  //Get rid of player used items
  playerState.items = playerState.items.filter((item) => {
    return !this.usedInstanceIds[item.instanceId];
  });
}
module.exports = update;
