const TAG = '[SERVICES/AUTHENTICATION]';
const logger = require('../core/logger');
const moment = require('moment');
const jwt = require('../core/helpers/jwt');


module.exports.generateToken = (data) => {
  const ACTION = '[generateToken]';
  logger.log('info', `${TAG}${ACTION}`);

  return new Promise ((resolve, reject) => {
    let correct_creds = {username:'admin',password:'password'}

    if(data.username == correct_creds.username && data.password == correct_creds.password){
      let token = jwt.generateToken({ username: data.username});
      resolve(token);
    }else{
      resolve(null);
    }
  })
};