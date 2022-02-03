const TAG = '[HELPERS/JWT]';
const jwt = require('jsonwebtoken');
const logger = require('../logger')
const secret = 'sikretongmalupetdw';
const JWT_KEY = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

module.exports.validateJWT = token => {
  const ACTION = '[validateJwt]';
  logger.log('info', `${TAG}${ACTION}`);

  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, function(err, decoded){
      if (err) {
        reject(err);
      }
      resolve(decoded);
    })
  })
  
}

module.exports.generateToken = data => {
  const ACTION = '[generateToken]';
  logger.log('info', `${TAG}${ACTION}`);
  
  return new Promise((resolve, reject) => {
    var token = jwt.sign(data, secret, { expiresIn: '100 years'});
    resolve(token);
  })
  
}

module.exports.getToken = (data) => {
  const ACTION = '[getToken]';
  logger.log('info', `${TAG}${ACTION}`);

  try {
    let token = jwt.sign({
      email:data.email,
      user_id:data.sys_id},
      JWT_KEY,
      {expiresIn: "12h"}
    )
    return token;
  } catch (error) {
    return null;
  }
}
