const express = require('express');
const router = express.Router();
const path = require('path');
const rootdir = require('./util/path');

// Define your admin routes here
router.get('/add-product', (req, res) => {
    res.sendFile(path.join(rootdir, 'views', 'addproduct.html'));
});

router.get('/contactus', (req, res) => {
    res.sendFile(path.join(rootdir, 'views', 'form.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

router.post('/success', (req, res, next) => {
    // Handle the form submission here, e.g., saving data to a database
    res.send("Successfully submitted")
});

module.exports = router;




// const express = require('express');

// const router = express.Router();
// const path=require('path');
// const rootdir=require('./util/path');

// // Define your admin routes here
// router.get('/add-product', (req, res) => {
//   res.sendFile(path.join(rootdir,'views','addproduct.html'));
//    //res.redirect('/add-product.html')
// });

// router.post('/add-product', (req, res,next) => {
//     console.log(req.body);

//   res.redirect('/');
// });

// module.exports = router;