const express = require('express');
const isAuth = require('../middleware/isAuth');
const { validation, signupValidate, loginValidate} = require('../middleware/validateUser');
const {Signup, Login, Removeuser } = require('../controllers/user.controllers');

const router = express.Router();


router.post("/signup", signupValidate(), validation, Signup)
router.post("/login", loginValidate(), validation, Login)
router.get("/current", isAuth, (req,res)=>{ res.send({ msg:"Authorized", user: req.user }) })
router.delete("/:Id", Removeuser)

module.exports = router;