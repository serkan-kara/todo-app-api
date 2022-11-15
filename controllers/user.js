const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { db } = require('../app/db');

module.exports.signUp = async (root, args, context) => {
    const { name, email, password } = args;

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const response = await db.query('insert into users (name, email, password) values ($1, $2, $3)', [name, email, hashedPassword]);
    if (response.rowCount >= 1) {
        return true;
    } else {
        return false;
    }
}

module.exports.login = async (root, args, context) => {
    const { email, password } = args;

    const response = await db.query('select * from users where email = $1', [email]);
    if (response.rowCount > 0) {
        const user = response.rows[0];
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (isPasswordMatch) {
            return jwt.sign({ id: user.id, name: user.name, email: user.email }, process.env.JWT_ACCESS_SECRET, {
                expiresIn: process.env.JWT_ACCESS_EXPIRE
            });
        } else { return "" }
    } else {
        return "";
    }
}