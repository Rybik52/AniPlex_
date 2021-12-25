const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index.hbs', {
        title: 'nikita'
    });
});

module.exports = router;