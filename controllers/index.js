const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const profileRoutes = require("./profile-routes");
const gameRoutes = require("./game-routes.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/profile", profileRoutes);
router.use("/game", gameRoutes);

module.exports = router;
