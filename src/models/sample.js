const TAG = '[MODELS/MOTORS]';
const { resolve, reject, Promise } = require('bluebird');
const db = require('../core/database');
const logger = require('../core/logger');
// const currentDate = require('../core/helper/datenow');
const { limit } = require('../core/database');

module.exports.sampleGet = data => {
  const ACTION = '[sampleGet]';
  logger.log('info', `${TAG}${ACTION}`);

  return new Promise((resolve, reject) => {
    let data = [
      {
        fruit_name:"Apple",
        fruit_color:"Red",
        fruit_taste:"Sweet"
      },{
        fruit_name:"Lemon",
        fruit_color:"Yellow",
        fruit_taste:"Sour"
      },{
        fruit_name:"Blueberries",
        fruit_color:"Blue",
        fruit_taste:"Unknown"
      }
    ]
    resolve(data);
  })
};

module.exports.postCustomerDetails = (data) => {
  const ACTION = '[postCustomerDetails]';
  logger.info('info', `${TAG}${ACTION}`);

  return new Promise((resolve, reject) => {
      db('sample_customer').insert(data)
      .then(res => {
          resolve(res);
      }).catch(e => {
          reject(e);
      });
  });
};

module.exports.getCustomerDetails = () => {
  const ACTION = '[getCustomerDetails]';
  logger.info('info', `${TAG}${ACTION}`);

  return new Promise((resolve, reject) => {
    db.select('*').from('sample_customer')
    .then(res => {
      resolve(res);
    }).catch(e => {
      reject(e);
    });
  });
};

module.exports.updateCustomerDetails = (data, id) => {
  const ACTION = '[updateCustomer]';
  logger.info('info', `${TAG}${ACTION}`);

  return new Promise((resolve, reject) => {
    db('sample_customer')
    .update(data)
    .where('id', id)
    .then(res => {
      resolve(res);
    }).catch(e => {
      reject(e);
    });
  });
};
