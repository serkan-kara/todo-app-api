const jwt = require('jsonwebtoken');

module.exports.verifyUser = async (req) => {
    req.uid = null;
    const bearerHeader = req.headers.authorization;
    if (bearerHeader) {
        const token = bearerHeader.split(' ')[1];
        const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        req.uid = payload.id;
    }
}