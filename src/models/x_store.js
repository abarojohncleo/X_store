const TAG = '[MODELS/XSTORE]';
const { resolve, reject, Promise } = require('bluebird');
const db = require('../core/database');
const logger = require('../core/logger');
// const currentDate = require('../core/helper/datenow');
const { limit } = require('../core/database');

module.exports.checkEmailExists = (email) => {
  const ACTION = '[checkEmailExists]'
  logger.log('info', `${TAG}${ACTION}`)

  return new Promise((resolve, reject) => {
    db.select('email').from('x_user')
    .where('email', email)
    .then(res => {
      resolve(res);
  }).catch(e => {
    reject(e);
  });
  });
};

module.exports.postUser = (data) => {
  const ACTION = '[postUser]';
  logger.log('info', `${TAG}${ACTION}`);

  return new Promise((resolve, reject) => {
    db('x_user').insert(data)
    .then(res => {
      resolve(res);
    }).catch(e => {
      reject(e);
    });
  });
};

module.exports.getUserDetails = (email) => {
  const ACTION = '[getUserDetails]';
  logger.log('info', `${TAG}${ACTION}`);

  return new Promise((resolve, reject) => {
    db.select('*').from('x_user')
    .where('email', email)
    .then(res => {
      resolve(res);
    }).catch(e => {
      reject(e);
    });
  });
};

module.exports.getUsers = () => {
  const ACTION = '[getUsers]';
  logger.log('info', `${TAG}${ACTION}`);

  return new Promise((resolve, reject) => {
    db.select('*').from('x_user')
    .then(res => {
      resolve(res);
    }).catch(e => {
      reject(e);
    });
  });
};