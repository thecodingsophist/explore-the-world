const express = require('express');
const exphbs = require("express-handlebars");
var serveStatic = require('serve-static');

require('dotenv').config()

const app = express();
const host = '0.0.0.0';
const PORT = process.env.PORT || 3000;

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'views/layouts/main'}));

app.use(express.static('public'));

const locations = require('./controllers/locations.js');

app.get('/', function(req, res) {
    res.render('home', {layout: 'main'});
});

app.get('/contact', function(req, res) {
    res.render('contact', {layout: 'main'});
});

app.get('/about', function(req, res) {
    res.render('about', {layout: 'main'});
});

locations(app);

app.listen(PORT, host, function() {
    console.log("Server started.....");
});

module.exports = app;
