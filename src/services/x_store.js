const TAG = '[SERVICES/XSTORE]';
const logger = require('../core/logger');
const moment = require('moment');
const XStoreModel = require('../models/x_store');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
 
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
      console.log(data)
      let get_hash_password = await XStoreModel.getUserHashPassword(data.email);
      let hash_password = get_hash_password[0].password

      let match = await bcrypt.compare(data.password, hash_password)
      if(match){
        let message = 'password match';
        ObjArr.push(message)
      }else{
        let message = 'password mismatch';
        ObjArr.push(message)
      }
      return ObjArr;
    } catch (error) {
      console.log(error)
      return null;
    }
  }
}