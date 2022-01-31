const router = require('express').Router();
const Sample = require('../models/sample');
const { response, SUCCESS, UPDATED, CREATED, INVALID_TOKEN, UNAUTHORIZED,INTERNAL_SERVER_ERROR } = require('../core/response');
const jwt = require('../core/helpers/jwt');
const CustomerServices = require('../services/sample');

router.get('/withToken', (req, res) => {
  let token = req.headers.authtoken;

  jwt.validateJWT(token).then(r => {
    Sample.sampleGet()
    .then(result => {
      return res.success(response(SUCCESS, '', result));
    }).catch(err => {
      res.error(err);
    });
  }).catch(e => {
    res.error(response(UNAUTHORIZED));
  })
})


router.get('/', (req, res) => {
  Sample.sampleGet()
  .then(result => {
    return res.success(response(SUCCESS, '', result));
  }).catch(err => {
    res.error(err);
  });
});

router.post('/post_customer', async (req, res) => {
  let data = req.body
  let result = await CustomerServices.postCustomerDetails(data);
  if(result){
    res.success(response(CREATED));
  }else{
    res.error(response(INTERNAL_SERVER_ERROR));
  }
});

router.get('/get_customer', async(req, res) => {
  let result = await CustomerServices.getCustomerDetails();
  if(result){
    res.success(response(SUCCESS, '', result));
  }else {
    res.error(response(INTERNAL_SERVER_ERROR));
  }
});

router.put('/update_cutomer/:id', async(req, res) => {
  let {id} = req.params;
  let data = req.body;
  let result = await CustomerServices.updateCustomerDetails(data, id);
  if(result){
    res.success(response(UPDATED, '', result))
  }else {
    res.error(response(INTERNAL_SERVER_ERROR));
  }
})

module.exports = router;
