'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controller/controller.js');

router.get("/getData", controller.mainPage)



module.exports = router;