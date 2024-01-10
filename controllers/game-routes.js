const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("game", {
    loggedIn: req.session.loggedIn,
    username: req.session.username,
  });
});

module.exports = router;
