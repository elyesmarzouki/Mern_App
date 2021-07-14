const { validationResult, check} = require("express-validator");

exports.postapplicationValidate=()=>[
    check("name","Last name is required").notEmpty(),
    check("qualifications","Qualifications are required").notEmpty(),
    check("country","Enter your country").notEmpty(),
    check("post","Post is required").notEmpty(),
    check("phonenumber","Phone number is required").notEmpty,
    check("email","Email is required").notEmpty,
    check("email","Should be email").isEmail(),
]

exports.validation=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};