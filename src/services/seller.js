const TAG = '[SERVICES/XSTORESELLER]';
const logger = require('../core/logger');
const moment = require('moment');
const XStoreSellerModel = require('../models/seller');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const Token = require('../core/helpers/jwt');

