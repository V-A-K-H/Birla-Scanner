const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({msg: 'No token, authorization denied'});
  }
  // Verify token
  try {
    jwt.verify(token, config.get('jwtSecret'), (err, decoded) => {
      if (err) {
        return res.json(401).json('The jwt key is not valid');
      } else {
        req.admin = decoded.user;
        next();
      }
    });
  } catch (errors) {
    res.status(500).json({errors});
  }
};
