const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const passwordUtils = require("./passwordUtils")
const User = require("../models/User")

passport.use(
	"local",
	new LocalStrategy(async function verify(username, password, done) {
		try {
			const user = await User.findOne({where: { username: username }})
			console.log(user)
			if (!user)  {
				return done(null, false, { message: "Incorrect username or password." })
			}

			const isValid = await passwordUtils.validatePassword({
				password,
				hash: user.password,
			});

			return done(null, isValid ? user : false);
		} catch (error) {
			return done(error);
		}
	})
)

/* This function is used in conjunction with the `passport.authenticate()` method.  See comments in
 * `passport.use()` above ^^ for explanation */

passport.serializeUser(function (user, done) {
	done(null, user.id)
})

/* This function is used in conjunction with the `app.use(passport.session())` middleware defined below.

 * In summary, this method is "set" on the passport object and is passed the user ID stored in the `req.session.passport`
 * object later on. */

passport.deserializeUser(function (id, done) {
	User.findByPk(id, function (err, user) {
		if (err) {
			return done(err)
		}
		done(null, user)
	})
})