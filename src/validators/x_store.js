const TAG = '[VALIDATION/XSTORE]';
const { body, query, param, check} = require('express-validator');
const XStoreModel = require('../models/x_store');

module.exports = {
  userValidation: [
    body('fname')
    .isString()
    .notEmpty().withMessage('First name must not be empty'),
    body('mname')
    .isString()
    .notEmpty().withMessage('Middle name must not be empty'),
    body('lname')
    .isString()
    .notEmpty().withMessage('Last name must not be empty'),
    body('email')
    .isEmail().withMessage('Email must be a valid email')
    .notEmpty().withMessage('Email must not be empty')
    .custom(async email => {
      const ACTION = '[checkEmailExists]';
      try {
        let email_exists = await XStoreModel.checkEmailExists(email);
        if(email_exists.length > 0){
          return Promise.reject('Email is already in use');
        }
      } catch (error) {
        return null;
      }
    })

  ],
  logInValidation: [
    body('email')
    .notEmpty().withMessage('Please enter your email address')
    .isEmail().withMessage('Please enter your email address')
    .custom(async email => {
      const ACTION = '[checkEmailExists]';
      try {
        let email_exists = await XStoreModel.checkEmailExists(email);
        if(email_exists.length === 0){
          return Promise.reject('Email is already in use');
        }
      } catch (error) {
        apiLogger.addErrorLog(error, `${TAG}${ACTION}`);
        return Promise.reject('Unable to validate Rpaf ID');
      }
    }),
    body('password')
    .notEmpty().withMessage('Please enter your password')
  ]
}
