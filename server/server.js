const express  = require('express');
const mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      cookieParser=require('cookie-parser'),
const methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
const app      = express();

const connect= mongoose.connect('mongodb://localhost/myapp');

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cookieParser())
app.enable('trust proxy');
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});




var server = app.listen(8100, function(){
var host = server.address().address;
var port = server.address().port;
console.log('App listening at http://%s:%s', host, port);
});