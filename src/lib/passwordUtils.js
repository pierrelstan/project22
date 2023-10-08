const argon2 = require("argon2");

function validatePassword({ password, hash }) {
	return argon2.verify(hash, password);
}

function hashPassword(password) {
	return argon2.hash(password);
}

module.exports = {
	hashPassword,
	validatePassword,
}
