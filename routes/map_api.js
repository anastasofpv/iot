'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controller/controller.js');


router
    .route("/")
    .get(controller.getMap)
    .post(controller.postMap)


module.exports = router;