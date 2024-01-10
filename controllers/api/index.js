const router = require("express").Router();

const users = require("./user-routes");
const games = require("./game-routes");
const progress = require("./progress-routes");

router.use("/games", games);
router.use("/users", users);
router.use("/progress", progress);

module.exports = router;
