const router = require('express').Router();
const sample = require('./controllers/sample');
const auth = require('./controllers/authentication');
const x_store = require('./controllers/x_store');

router.use('/sample', sample);
router.use('/auth', auth);
router.use('/x_store',x_store);

module.exports = router;