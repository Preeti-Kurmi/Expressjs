// adminController.js

exports.getAdminPage = (req, res, next) => {
    // Controller logic to handle the admin route
    res.send('Admin Page');
  };
  
  exports.postAdminData = (req, res, next) => {
    // Controller logic to handle POST requests to the admin route
    const data = req.body; // Access the request body data
    // Process the data and send a response
    res.send('Data received: ' + JSON.stringify(data));
  };
  