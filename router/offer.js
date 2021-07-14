const express = require('express');
const { Postoffer, Editoffer, Removeoffer, Getalloffers } = require('../controllers/offer.controllers');
const { validation, postofferValidate } = require('../middleware/validateOffer');

const router = express.Router();

router.post("/addoffer", postofferValidate(), validation, Postoffer)
router.get("/alloffers", validation, Getalloffers)
router.delete("/:Id", Removeoffer)
router.put("/:Id", Editoffer)

module.exports = router;