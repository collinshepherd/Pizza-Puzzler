const router = require("express").Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  try {
    // console.log(req.session.user_id);
    if (!req.session.user_id) {
      res.render("home");
      return;
    }
    const profileData = await User.findOne({
      where: {
        id: req.session.user_id,
      },
      include: [
        {
          model: User,
        },
      ],
    });

    const profile = profileData.get({ plain: true });

    // console.log(profile);
    res.render("profile", {
      profile: profile,
      loggedIn: req.session.loggedIn,
    });
    // res.json(profileData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // new user sign up adds user to db
// router.post('/', (req, res) =>{
//   console.log(req.body)
//   User.create(req.body)
//   .then((newUser) =>{
//     res.json(newUser);

//   })
//   .catch((err) => {
//     res.json(err)
//   })
// });

module.exports = router;
