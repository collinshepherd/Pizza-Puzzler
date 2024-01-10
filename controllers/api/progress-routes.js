const router = require("express").Router();
const { PlayerProgress } = require("../../models");

// GET progress by id
router.get("/getProgress", async (req, res) => {
  // if (!req.session.user_id) {
  //   res.json();
  //   return;
  // }
  console.log(req.session.user_id);
  console.log("test");
  try {
    const playerData = await PlayerProgress.findOne({
      where: {
        user_id: req.session.user_id,
      },
    });
    res.status(200).json({ message: "Loaded Player Save" });
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
    res.status(200).json({ message: "Saved Player Data" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
