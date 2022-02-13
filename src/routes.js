const router = require('express').Router();
const sample = require('./controllers/sample');
const auth = require('./controllers/authentication');
const x_store = require('./controllers/x_store');
const seller = require('./controllers/seller');

router.use('/sample', sample);
router.use('/auth', auth);
router.use('/x_store',x_store);
router.use('/seller', seller);



module.exports = router;