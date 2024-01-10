class Progress {
  constructor() {
    this.mapId = "Kitchen";
    this.startingHeroX = 0;
    this.startingHeroY = 0;
    this.startingHeroDirection = "down";
    this.saveFileKey = `PizzaLegends_SaveFile1`;
  }

  async save() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/progress/updateProgress",
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mapId: this.mapId,
            startingHeroX: this.startingHeroX,
            startingHeroY: this.startingHeroY,
            startingHeroDirection: this.startingHeroDirection,
            playerState: {
              pizzas: playerState.pizzas,
              lineup: playerState.lineup,
              items: playerState.items,
              storyFlags: playerState.storyFlags,
            },
          }),
        }
      );

      const result = await response.json();
      // console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async getSaveFile() {
    try {
      const apiUrl = "http://localhost:3001/api/progress/getProgress";
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const progress = await response.json();
      // console.log(progress);
      return progress.stateObject;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async load() {
    const file = await this.getSaveFile();
    if (file) {
      this.mapId = file.mapId;
      this.startingHeroX = file.startingHeroX;
      this.startingHeroY = file.startingHeroY;
      this.startingHeroDirection = file.startingHeroDirection;
      Object.keys(file.playerState).forEach((key) => {
        playerState[key] = file.playerState[key];
      });
    }
  }
}
