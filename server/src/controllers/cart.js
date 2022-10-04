const cart = require("../models/cart")
const Cart = require("../models/cart")
exports.addItemToCart = (req, res) => {

    // res.status(201).json({message:"cart"})
    Cart.findOne({ user: req.user._id })
        .exec((err, cart) => {
            if (err) return res.status(401).json({ err })
            if (cart) {
                const item = cart.cartItems.find(c => c.product == req.body.cartItems.product)
                if (item) {
                    Cart.findOneAndUpdate({ user: req.user._id , "cartItems.product": req.body.cartItems.product }, {
                        "$set": {
                            "cartItems": { 
                                ...req.body.cartItems,
                                quantity: item.quantity + req.body.cartItems.quantity
                            }
                        }
                    })
                        .exec((err, _cart) => {
                            if (err) return res.status(400).json({ err })
                            if (_cart) {
                                return res.status(201).json({ cart })
                            }
                        })

                } else {
                    Cart.findOneAndUpdate({ user: req.user._id }, {
                        "$push": {
                            "cartItems": req.body.cartItems
                        }
                    })
                        .exec((err, _cart) => {
                            if (err) return res.status(400).json({ err })
                            if (_cart) {
                                return res.status(201).json({ cart })
                            }
                        })
                }

            } else {
                const cart = new Cart(
                    {
                        user: req.user._id,
                        cartItems: [req.body.cartItems]
                    }
                )

                cart.save((err, cart) => {
                    if (err) return res.status(401).json({ err })
                    if (cart) return res.status(201).json({ cart })
                })
            }

        })



} 