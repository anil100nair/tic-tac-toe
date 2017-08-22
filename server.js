var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Changing PORT env variable messes up heroku deployment
var port = process.env.PORT;
var app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));  

// Set static folder
app.use(express.static(path.join(__dirname, 'src')));

// Routes
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.listen(port, () => console.log('Server started on port ' + port));