'use strict';
const router = require("express").Router();
const Translator = require('../components/translator.js');

const translator = new Translator();

router.post("/", (req, res) => {

});

module.exports = router;
