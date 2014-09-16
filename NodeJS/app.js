
/**
 * Module dependencies.
 */



var express = require('express');
var routes = require('./routes');

var listgivers = require('./routes/listgiver');

var listtakers = require('./routes/listtaker');
var addtaker = require('./routes/addtaker');
var addgiver = require('./routes/addgiver');
var takerinfo = require('./routes/takerinfo');

var addconnection = require('./routes/addconnection');
var ConnectionMain = require('./routes/ConnectionMain');
var updateconnection = require('./routes/updateconnection');
var giverinfo = require('./routes/giverinfo');
var updategiverinfo = require('./routes/updategiverinfo');
var updatetakerinfo = require('./routes/updatetakerinfo');
var updatetakeritems = require('./routes/updatetakeritems');
var updategiveritems = require('./routes/updategiveritems');
var takergive = require('./routes/takergive');
var takegive = require('./routes/takegive');
var nodemail = require('./routes/nodemail');
var emailsend = require('./routes/emailsend');
var notification = require('./routes/notification');


var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/listgiver',listgivers.listgiver);
app.get('/addtaker/:name&:email&:checkbox',addtaker.addtake);
app.get('/addgiver/:name&:email&:checkbox',addgiver.addgive);
app.get('/takerinfo/:name',takerinfo.takerin);
app.get('/addconnection/:user1&:user2',addconnection.addcon);
app.get('/ConnectionMain',ConnectionMain.ConMain);
app.get('/updateconnection/:user1&:user2',updateconnection.updatecon);
app.get('/giverinfo/:name',giverinfo.giverin);
app.get('/listtaker',listtakers.listtake);
app.get('/updatetakerinfo/:oldname&:name&:email&:checkbox',updatetakerinfo.updatetake);

app.get('/updategiverinfo/:oldname&:name&:email&:checkbox',updategiverinfo.updategive);
app.get('/updategiveritems/:name&:checkbox',updategiveritems.updategiveitem);
app.get('/updatetakeritems/:name&:checkbox',updatetakeritems.updatetakeritem);
app.get('/takergive/:name&:item',takergive.tgive);
app.get('/takegive/:name',takegive.tg);
app.get('/emailsend/:name&:oldname&:kind',emailsend.sending);
app.get('/notification/:user1&:user2',notification.notify);

app.get('/nodemail',nodemail.mail);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
