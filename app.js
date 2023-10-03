const express = require('express');
const adminroute=require('./admin.js');
const shoproute=require('./shop.js');
const bodyParser = require('body-parser'); // Import body-parser

const app = express();

app.use('/admin',adminroute);
app.use(shoproute);

// Use bodyParser middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req,res,next)=>{
    res.status(404).send("Page not found");
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
