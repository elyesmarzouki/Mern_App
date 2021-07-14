const { validationResult, check} = require("express-validator");

exports.signupValidate =()=>[
    check("firstname","Firstname is required").notEmpty(),
    check("lastname","Lastname is required").notEmpty(),
    check("email","Email is required").notEmpty(),
    check("email","Should be email").isEmail(),
    check("password","Password is required").notEmpty(),
    check("password","Enter a valid password").isLength({ min: 8}),
    check("phone","Phone number is required").notEmpty(),
];

exports.loginValidate=()=>[
    check("email","Email is required").notEmpty(),
    check("email","Should be email").isEmail(),
    check("password","Password is required").notEmpty(),
    check("password","Enter a valid password").isLength({ min: 8}),
];

exports.validation=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};