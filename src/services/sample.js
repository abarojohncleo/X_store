const TAG = '[SERVICES/AUTHENTICATION]';
const logger = require('../core/logger');
const moment = require('moment');
const CustomerModels = require('../models/sample')

module.exports = {
  postCustomerDetails: async (data) => {
    const ACTION = '[CustomerServices]';
    logger.log('info', `${TAG}${ACTION}`);
    try {
      let result = await CustomerModels.postCustomerDetails(data);
      return result;
    } catch (error) {
      return null;
    }
  },
  getCustomerDetails: async () => {
    const ACTION = '[getCustomerDetails]';
    logger.log('info', `${TAG}${ACTION}`);

    try {
      let result = await CustomerModels.getCustomerDetails();
      return result;
    } catch (error) {
      return null;
    }
  },
  updateCustomerDetails: async(data, id) => {
    const ACTION = '[updateCustomer]';
    logger.log('info', `${TAG}${ACTION}`);

    try {
      let result = await CustomerModels.updateCustomerDetails(data, id);
      return result;
    } catch (error) {
      return null;
    }
  }
}