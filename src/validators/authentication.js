const { body, query, param} = require('express-validator');

module.exports = {
  getToken: [
    body('username')
      .notEmpty()
      .withMessage('Username is required'),
    body('password')
      .notEmpty()
      .withMessage('Password is required')
  ]
}
