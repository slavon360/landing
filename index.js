var express = require('express');

var app = express();
var server = app.listen(5000, function(){
  console.log('server is running ...')
})

app.use(express.static('public'));
