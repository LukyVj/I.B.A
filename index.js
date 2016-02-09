var express = require('express');
var url = require('url');
var http = require('http');
var qs = require('querystring');
var request = require('request').defaults({ encoding: null });
var gm = require('gm')
  , imageMagick = gm.subClass({ imageMagick: true });
var app = express();
var Ascii = require('ascii');
var open = require("open-uri");
var fs =  require('fs');
var phantom = require('phantom-render-stream');
var render = phantom();
var jade = require('jade');


// Canvas thingy
var Canvas = require('canvas')
  , Image = Canvas.Image
  , canvas = new Canvas(200, 200)
  , ctx = canvas.getContext('2d');


// http.createServer(function (req, res) {
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', function(req, res){


      var location = qs.parse(url.parse(req.url).query).u,
           c = qs.parse(url.parse(req.url).query).c,
           s = qs.parse(url.parse(req.url).query).s,
           ff = qs.parse(url.parse(req.url).query).ff,
           fs = qs.parse(url.parse(req.url).query).fs,
           ls = qs.parse(url.parse(req.url).query).ls,
           fw = qs.parse(url.parse(req.url).query).fw,
           lh = qs.parse(url.parse(req.url).query).lh;
  
      request.get(location, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          
          data =  new Buffer(body).toString('base64');
          body = '<img src="data:image/png;base64,'+data+'" id="jscii-element-image"/>'+
                 '<div id="ascii-container-image"></div>'
                 'script( src="http://dph.am/jscii/src/jscii.js" )'+
                 '<script> var imgJscii = new Jscii({ width: 200, color: true, el: document.getElementById("jscii-element-image"), fn: function(str) { document.getElementById("ascii-container-image").innerHTML = str;}});</script>';
      

            res.render('index', { 
              title: 'I.B.A - Images to Base64 to ASCII',
              short: 'I.B.A',
              name: 'I.B.A',
              message:'Images to Base64 to ASCII',
              imUrl: 'data:image/png;base64,'+data,
              color: c,
              original: location,
              size: s,
              font: ff,
              fonsize: fs,
              letterspacing: ls,
              fontweight: fw,
              lineheight: lh
            });
          }
      });
  });

 
     app.get('/ascii', function(req, res) {
        fs.readFile('./ascii.html', 'utf8', function (err,data) {
          if (err) {
            return console.log(err);
          }
          res.send(data);
        });
     });
app.listen(process.env.PORT || 3000);
// }).listen(8080);

