const router = require('express').Router();
const Products = require('../models/product');

router.get('/', async (req, res) => {
    const product = await Products.find().lean();
    res.render('index.hbs', {
        product: product
    });
});

module.exports = router;