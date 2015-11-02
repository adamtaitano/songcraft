var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

// routes to serve the static HTML files
app.get('/', function(req, res) {
    res.sendfile('index.html');
});
// Note: route names need not match the file name
app.get('/about', function(req, res) {
    res.sendfile('public/about.html');
});

app.get('/contact', function(req, res) {
    res.sendfile('public/contact.html');
});

app.get('/post', function(req, res) {
    res.sendfile('public/post.html');
});

app.listen(3000);
