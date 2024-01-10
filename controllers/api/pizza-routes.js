const router = require("express").Router();
const { Pizza } = require("../../models");

// GET all Pizzas
router.get("/", async (req, res) => {
  try {
    const pizzaData = await Pizza.findAll();

    res.json(pizzaData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/getUserPizzas", async (req, res) => {
  try {
    console.log("hit the route and user id = ", req.session.user_id);
    const pizzasForUser = await Pizza.findAll({
      where: { userId: req.session.user_id },
    });

    console.log(pizzasForUser);

    res.json(pizzasForUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
