// server.js

// BASE SETUP
//=============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();
var bodyParser = require('body-parser');    // define our app using express
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/blogPosts');  // connect to our database

var Post 	   = require('./models/posts')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());                 

var port = process.env.PORT || 8080		    // set our port



// ROUTES FOR OUR API
//==============================================================================
var router = express.Router();              // get an instance of the express Router

/*
We will use an instance of the Express Router to handle all of our routes. 
Here is an overview of the routes we will require, what they will do, 
and the HTTP Verb used to access it.

Route	           		HTTP Verb	          Description
   /api/posts	      	   GET	                 Get all the posts.
   /api/posts	           POST	                 Create a post.
   /api/posts/:post_id	   GET	                 Get a single post.
   /api/posts/:post_id	   PUT	                 Update a post with new info.
   /api/posts/:post_id	   DELETE	             Delete a post.

*/

// middleware to use for all requests
router.use(function (req, res, next) {
	// do logging
	console.log('Something is happening.');
	next(); // make sure we go to the next routes and don't stop here
})




// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES ---------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);













