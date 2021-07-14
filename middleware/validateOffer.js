const { validationResult, check} = require("express-validator");

exports.postofferValidate=()=>[
    check("company","Company's name is required").notEmpty(),
    check("post","Post is required").notEmpty(),
    check("minwage","Minimum wage is required").notEmpty(),
    check("country","Enter your country").notEmpty(),
    check("requirements","Requirements are required").notEmpty(),
    check("submissiondeadline","Submission deadline is required").notEmpty(),
    check("dateofpublication","Date of publication is required").notEmpty(),
    check("email","Email is required").notEmpty(),
    check("email","Should be email").isEmail(),
    check("phonenumber","Phone number is required").notEmpty(),
];

exports.validation=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};