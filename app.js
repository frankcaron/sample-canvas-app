// using the http module
var express = require('express')
var app = express()
const path = require('path');
app.use('/content', express.static(path.join(__dirname, 'content')))

//Helpers
 
// look for PORT environment variable, 
// else look for CLI argument,
// else use hard coded value for port 8080
const port = process.env.PORT || process.argv[2] || 8080;

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.json({'context': 'Welcome to the Miner Consumer Site back-end API. Please refer to the links for further calls.','links': [{'name': 'users', 'href': '/canvas-demo/'}] });
  res.end();
})

//Return for the fixed page 
app.get('/canvas-demo/',function(req,res) {
  res.sendFile(path.join(__dirname+'/content/index.html'));
});


//Launch listening server on port Heroku-capable port
app.listen(port, function () {
  console.log('App listening as would be expected!')
})
