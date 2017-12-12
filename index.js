var express = require('express');

var app = express();
app.set('port', (process.env.PORT || 80));

app.listen(app.get('port'), function(){
  console.log('server is running ...');
});

app.use(express.static('public'));
