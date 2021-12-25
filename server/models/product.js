const { Schema, model } = require('mongoose');

const Products = new Schema({
    title: { type: String, required: 'title is required', unique: true },
    autor: { type: String, required: true },
    date: { type: String, required: true },
    genres: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, required: true }
});

module.exports = model('Products', Products);