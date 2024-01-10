const router = require("express").Router();
const { PlayerProgress } = require("../../models");

// GET progress by id
router.get("/getProgress", async (req, res) => {
  try {
    const playerData = await PlayerProgress.findOne({
      where: {
        user_id: req.session.user_id,
      },
    });

    res.json(playerData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/updateProgress", async (req, res) => {
  try {
    const stateObject = req.body;

    await PlayerProgress.update(
      { stateObject },
      {
        where: {
          user_id: req.session.user_id,
        },
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
