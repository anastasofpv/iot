'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controller/controller.js');


router
    .route("/")
    .get(controller.getThermal)
    .post(controller.postThermal)


module.exports = router;