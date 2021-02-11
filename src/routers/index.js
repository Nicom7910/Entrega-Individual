const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.home);
router.get('/index', indexController.home);
router.get('/detail' , indexController.detail);

module.exports = router;