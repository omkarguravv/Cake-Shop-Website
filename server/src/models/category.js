const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    categoryImage: {
        type: String
    },
    parentID: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);