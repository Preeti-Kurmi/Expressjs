const express = require('express');
const path=require('path');
const adminroute=require('./admin.js');
const shoproute=require('./shop.js');
const bodyParser = require('body-parser'); // Import body-parser


const app = express();

app.use(adminroute);
app.use(shoproute);
app.use(express.static(path.join(__dirname, 'public')));

// Use bodyParser middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
