// using the http module
var express = require('express')
var app = express()
bodyParser = require('body-parser'),
CryptoJS = require("crypto-js");
const path = require('path');

//Content
app.use('/content', express.static(path.join(__dirname, 'content')))
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ entended: true }));

// look for PORT environment variable, 
// else look for CLI argument,
// else use hard coded value for port 8080
const port = process.env.PORT || process.argv[2] || 8080;
var consumerSecret = process.env.CANVAS_CONSUMER_SECRET;

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.json({'context': 'Welcome to the Miner Consumer Site back-end API. Please refer to the links for further calls.','links': [{'name': 'users', 'href': '/canvas-demo/'}] });
  res.end();
})

//Return for the fixed page 
app.get('/canvas-demo/',function(req,res) {
  res.render('content/index.html');
});

//Signed request for canvas app
app.post('/canvas-demo/', function (req, res) {
  var signed_req = req.body.signed_request;
  var hashedContext = signed_req.split('.')[0];
  var context = signed_req.split('.')[1];
  var hash = CryptoJS.HmacSHA256(context, consumerSecret);
  var b64Hash = CryptoJS.enc.Base64.stringify(hash);
  if (hashedContext === b64Hash) {
    res.render('content/index.html', { req: req.body, res: res.data });
 } else {
    res.send("Canvas authentication failed");
  };
})


//Launch listening server on port Heroku-capable port
app.listen(port, function () {
  console.log('App listening as would be expected!')
})

//Export for tests
module.exports = app;