const router = require('express').Router();
const { response, SUCCESS, UPDATED, CREATED, INVALID_TOKEN, UNAUTHORIZED,INTERNAL_SERVER_ERROR } = require('../core/response');
const jwt = require('../core/helpers/jwt');
const XStoreSellerService = require('../services/seller');
const { data } = require('../core/logger');
const XStoreSellerValidation = require('../validators/seller');
const validate = require('../middlewares/validate');



module.exports = router;