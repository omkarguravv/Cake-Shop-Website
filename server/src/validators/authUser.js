const { check,validationResult } = require('express-validator');

exports.validateSignupRequest = [
    check('firstName')
        .notEmpty().withMessage('FisrtName is Required'),

    check('lastName')
        .notEmpty().withMessage('LastName is Required'),

    check('userEmail')
        .isEmail().withMessage('Valid Email is Required'),

    check('password')
        .isLength().withMessage('Password Must be 6 character Long')
    ,
]
exports.validateSigninRequest = [
    check('userEmail')
        .isEmail().withMessage('Valid Email is Required'),

    check('password')
        .isLength().withMessage('Password Must be 6 character Long')
    ,
]

exports.isRequestValidated = (req,res,next)=>{
    const errors = validationResult(req);
    if(errors.array().length>0){
        return res.status(400).json({errors:errors.array()[0].msg})
    }
    next();
}