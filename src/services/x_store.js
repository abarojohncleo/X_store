const TAG = '[SERVICES/XSTORE]';
const logger = require('../core/logger');
const moment = require('moment');
const XStoreModel = require('../models/x_store');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const Token = require('../core/helpers/jwt');

module.exports = {
  postUser: async (data) => {
    const ACTION = '[postUser]';
    logger.log('info', `${TAG}${ACTION}`);
    try {
      let password = bcrypt.hashSync(data.password, 10);
      data.sys_id = uuidv4();
      data.password = password;
      let result = await XStoreModel.postUser(data);
      return result;
    } catch (error) {
      return null;
    }
  },
  userLogIn: async (data) => {
    const ACTION = '[userLogIn]';
    logger.log('info', `${TAG}${ACTION}`);
    try {
      let ObjArr = []
      
      let getUserDetails = await XStoreModel.getUserDetails(data.email);
      let hash_password = getUserDetails[0].password

      let match = await bcrypt.compare(data.password, hash_password)
      if(match){
        let data = {
          email:getUserDetails[0].email,
          user_id:getUserDetails[0].sys_id,
          user_role: getUserDetails[0].role
        }
        console.log(data)
        let token = Token.getToken(data)
        ObjArr.push(token);
      }else{
        let message = 'Auth failed';
        ObjArr.push(message)
      }
      return ObjArr;
    } catch (error) {
      console.log(error)
      return null;
    }
  }
}