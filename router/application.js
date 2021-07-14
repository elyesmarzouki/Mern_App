const express = require('express');
const { Postapplication, Editapplication, Removeapplication, Getallapplications } = require('../controllers/application.controllers');
const { validation, postapplicationValidate } = require('../middleware/validateApplication');

const router = express.Router();

router.post("/addapplication", postapplicationValidate(), validation, Postapplication)
router.get("/allapplications", validation, Getallapplications)
router.delete("/:Id", Removeapplication)
router.put("/:Id", Editapplication)

module.exports = router;