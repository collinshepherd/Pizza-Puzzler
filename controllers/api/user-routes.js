const router = require("express").Router();
const { User, PlayerProgress } = require("../../models");

// GET all users
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();

    // testing the route
    res.json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one user
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);

    // testing the route
    res.json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route to handle login requests
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    const user = await dbUserData.get({ plain: true });

    if (!user) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    // Adding cookies to the user after they login
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = user.username;
      req.session.user_id = user.id;
      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Signup route for new users
router.post("/signup", async (req, res) => {
  try {
    // Create a new user
    const newUser = await User.create(req.body);

    const newPlayerData = await PlayerProgress.create({
      user_id: newUser.id,
      stateObject: PlayerProgress.defaultPlayerProgress,
    });

    // Save session and respond
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = newUser.username;
      req.session.user_id = newUser.id;
      res
        .status(200)
        .json({ user: newUser, message: "You are now logged in!" });
    });
  } catch (err) {
    // Handle errors
    console.error("Error creating user and pizzas:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Logout the current user and destroy their session cookie
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Delete the user with this id
router.delete("/:id", async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    // For testing
    res.json(userData);

    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
