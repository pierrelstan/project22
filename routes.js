const router = require('express').Router()
const passport = require("passport")
const passwordUtils = require("./src/lib/passwordUtils")
const User = require("./src/models/User")

router.post(
	"/login",
	passport.authenticate("local"),
	function (req, res, next) {
		if (req.isAuthenticated() && req.user.admin) {
			res.redirect("/admin-dashboard")
		} else {
			res.sendStatus(200)
		}
	}
)

router.post("/register", async (req, res, next) => {
  const { email, username, password, admin } = req.body
  try {
    const hash = await passwordUtils.hashPassword(password)
    const user = await User.create({ email, username, password: hash, admin })
    console.log(`User created for ${user.username}`);
    return res.redirect("/login")
  } catch (error) {
    return next(error)
  }
});

module.exports = router