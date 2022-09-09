const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        min: 3,
        trim: true,
        index: true,
        lowercase: true
    },
    userEmail: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hash_password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    contactNumber: {
        type: String,
    },
}, { timestamps: true });

//Password Hashing
userSchema.virtual('password')
    .set(function (password) {
        this.hash_password = bcrypt.hashSync(password, 10)
    });

userSchema.method = {
    authenticae: function (password) {
        return bcrypt.compareSync(password, this.hash_password)
    }
}

module.exports = mongoose.model('User', userSchema)