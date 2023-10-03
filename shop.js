const express = require('express');
const router = express.Router();

// Define your admin routes here
router.get('/', (req, res,next) => {
    res.send('<h1>hi</h1>');
});
module.exports = router;