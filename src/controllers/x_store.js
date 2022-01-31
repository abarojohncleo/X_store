const router = require('express').Router();
const { response, SUCCESS, UPDATED, CREATED, INVALID_TOKEN, UNAUTHORIZED,INTERNAL_SERVER_ERROR } = require('../core/response');
const jwt = require('../core/helpers/jwt');
const XStoreServices = require('../services/x_store');
const { data } = require('../core/logger');
const XStoreValidation = require('../validators/x_store');
const validate = require('../middlewares/validate');

router.post('/post_user', XStoreValidation.userValidation, validate, async (req, res) => {
  let data = req.body;
  let result = await XStoreServices.postUser(data);
  if(result){
    res.success(response(CREATED));
  }else{
    res.error(response(INTERNAL_SERVER_ERROR));
  }
});

router.post('/login', async(req, res) =>{
  let data = req.body;
  let result = await XStoreServices.userLogIn(data);
  if(result){
    res.success(response(SUCCESS, '', result));
  } else {
    res.error(response(INTERNAL_SERVER_ERROR));
  }
})

module.exports = router;

