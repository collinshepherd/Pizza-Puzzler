const router = require("express").Router();
const fetchData = require("../public/js/game/FetchData");
const updateData = require("../UpdateData");

router.get("/", async (req, res) => {
  console.log(req.session);
  // await fetchData(req);
  // await updateData();
  res.render("home", {
    loggedIn: req.session.loggedIn,
    username: req.session.username,
  });
});

router.get("/test", async (req, res) => {
  res.render("test");
});

router.get("/login", async (req, res) => {
  console.log("req.session.loggedIn", req.session.loggedIn);
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
