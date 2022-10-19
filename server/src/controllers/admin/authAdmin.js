const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const user = require('../../models/user')
// const user = require('../models/user')


//Signup and Authentication
exports.signup = (req, res) => {
    User.findOne({ userEmail: req.body.userEmail })
        .exec((error, user) => {
            if (user) return res.status(400).json({
                message: 'Admin Already Registered'
            })

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
                role : 'admin'
            });

            _user.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: 'Something Went Wrong'
                    })
                }

                if (data) {
                    return res.status(201).json({
                        message: 'Admin created '
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
                if (user.authenticate(req.body.password) && user.role === 'admin') {
                    
                    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
                    const { firstName, lastName, userEmail, role, fullName } = user;
                    res.cookie('token',token,{expiresIn:'1h'})
                    res.status(200).json({
                        token,
                        user: {
                            firstName, lastName, userEmail, role, fullName
                        }
                    })
                    
                }else{
                    
                    return res.status(200).json({
                        message : "Invalid Password"
                    })
                }
            }
            else {
                return res.status(400).json({ message: "Something went wrong " })
            }
        });


}
exports.signout = (req,res) =>{
    res.clearCookie('token')
    res.status(200).json({
        message : "Signout Succesfully...."
    })
}
