var friends = require('./../controller/friends.js');
var bodyParser = require('body-parser');
  // This is our routes.js file located in /config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  

  module.exports = function(app) {
  	app.use(bodyParser.urlencoded());
  	app.use(bodyParser.json());

    app.get('/friends', function(req, res) {
      friends.show(req,res);
    });
    app.post('/friends', function(req, res){
    	friends.create(req, res);
    });
  };