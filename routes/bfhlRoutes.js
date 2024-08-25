const express = require('express');
const router = express.Router();
const { postData, getData } = require('../controllers/bfhlController');

// Define routes for POST and GET methods
router.post('/', postData);
router.get('/', getData);

module.exports = router;
