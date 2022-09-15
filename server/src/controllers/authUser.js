const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator');




//Signup and Authentication
exports.signup = (req, res) => {
 

    User.findOne({ userEmail: req.body.userEmail })
        .exec((error, user) => {
            if (user) return res.status(400).json({
                message: 'User Already Registered'
            })

            //array destructuring

            const _user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                userEmail: req.body.userEmail,
                password: req.body.password,
                userName: Math.random().toString(),
            })


            _user.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: 'Something Went Wrong'
                    })
                }

                if (data) {
                    return res.status(201).json({
                        message: 'Registration Done'
                    })
                }
            })



        })
}

//SIGNIN AUTHENTICATION
exports.signin = (req, res) => {
    User.findOne({ userEmail: req.body.userEmail })
        .exec((error, user) => {
            if (error) return res.status(400).json({ error })
            if (user) {
                if (user.authenticate(req.body.password)) {

                    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
                    const { firstName, lastName, userEmail, role, fullName } = user;
                    res.status(200).json({
                        token,
                        user: {
                            firstName, lastName, userEmail, role, fullName
                        }
                    })

                } else {

                    return res.status(200).json({
                        message: "Invalid Password"
                    })
                }
            }
            else {
                return res.status(400).json({ message: "Something went wrong " })
            }
        });


}
