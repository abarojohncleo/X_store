const router = require('express').Router();
const validate = require('../middlewares/validate');
const authValidationRules = require('../validators/authentication');
const Auth = require('../services/authentication');
const { response, SUCCESS, CREATED, INVALID_CREDENTIALS } = require('../core/response');

router.post('/getToken', authValidationRules.getToken, validate, async (req, res) => {
  let data = req.body;
  
  // let result = await Auth.generateToken(data);
  // if(result) {
  //   res.success(response(CREATED, '', result));
  // }else{
  //   res.error(response(INTERNAL_SERVER_ERROR));
  // }

  Auth.generateToken(data)
  .then(data => {
    if(!data){
      res.error(response(INVALID_CREDENTIALS));
    }else{
      return res.success(response(SUCCESS, '', data));
    }
  }).catch(err => {
    res.error(err);
  })
  
})

module.exports = router;