const { isTokenValid } = require('../utils/jwt');

const authenticatedUser = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try {
        const payload = isTokenValid({ token });
        req.user = payload;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token not valid' });
    }
    };

module.exports = {
    authenticatedUser,
};