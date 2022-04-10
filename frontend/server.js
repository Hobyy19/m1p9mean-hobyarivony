//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/m1p9mean-hobyarivony'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/m1p9mean-hobyarivony/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8000);

// var express = require('express');
// var bodyParser = require('body-parser');

// var app = express();

// var port = process.env.PORT || 8000;

// var path = require('path');
// var rootPath = path.normalize(__dirname + '/');
// app.use(express.static(rootPath + '/app'));



// app.listen(port, function (err) {
//   console.log('running server on port ' + port);
// });