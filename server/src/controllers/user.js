const User = require('../models/user')

exports.signup= (req,res)=>{
    User.findOne({ userEmail: req.body.email })
    .exec((error, user) => {
        if (user) {
            return res.status(400).json({
                message: 'User Already Registered'
            })
        }
        //array destructuring
        const {
            firstName,
            lastName,
            userEmail,
            password,
        } = req.body

        const _user = new User({
            firstName,
            lastName,
            userEmail,
            password,
            userName: Math.random().toString(),
        });

        _user.save((error, data) => {
            if (error) {
                return res.status(400).json({
                    message: 'Something Went Wrong'
                })
            }
            if (data) {
                return res.status(201).json({
                    message: 'User created '
                })
            }
        })



    })
}