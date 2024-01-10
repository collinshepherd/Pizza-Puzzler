const router = require("express").Router();

const users = require("./user-routes");
const upgrade = require("./upgrade-routes");
const monsters = require("./monster-routes");
const games = require("./game-routes");
const pizza = require("./pizza-routes");

router.use("/games", games);
router.use("/upgrade", upgrade);
router.use("/monsters", monsters);
router.use("/users", users);
router.use("/pizza", pizza);

module.exports = router;
