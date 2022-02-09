const TAG = '[HELPERS/JWT]';
const { response, SUCCESS, UPDATED, CREATED, INVALID_TOKEN, UNAUTHORIZED,INTERNAL_SERVER_ERROR } = require('../../core/response');
const XStoreModel = require('../../models/x_store');
const jwt = require('jsonwebtoken');
const logger = require('../logger');
const { check } = require('express-validator');
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
    console.log(data)
    let token = jwt.sign({
      email:data.email,
      user_id:data.sys_id,
      user_role: data.role
    },
      JWT_KEY,
      {expiresIn: "12h"}
    )
    return token;
  } catch (error) {
    return null;
  }
}

module.exports.checkAuth = (req, res, next) => {
  try {
    const verify = jwt.verify(req.headers.token, JWT_KEY)
    next();
  } catch (error) {
    res.error(response(INVALID_TOKEN))
  }
};

module.exports.isAdmin = async (req, res, next) => {
  try {
    const decoded = jwt.decode(req.headers.token, JWT_KEY);
    let get_user_role = await XStoreModel.getUserDetails(decoded.email);
    let user_role = get_user_role[0].role
    if(user_role === 'admin'){
      next();
    }else{
      res.error(response(UNAUTHORIZED))
    }
  } catch (error) {
    return null
  }
}

module.exports.isSeller = async (req, res, next) => {
  try {
    const decoded = jwt.decode(req.headers.token, JWT_KEY);
    let get_user_role = await XStoreModel.getUserDetails(decoded.email);
    let user_role = get_user_role[0].role
    if(user_role === 'seller'){
      next();
    }else{
      res.error(response(UNAUTHORIZED))
    }
  } catch (error) {
    return null
  }
}

