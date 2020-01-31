const env = require('dotenv').config()
const express = require('express');
const exphbs = require("express-handlebars");

const app = express();
const host = 'localhost';
const PORT = process.env.PORT || 3000;


app.engine('handlebars', exphbs({defaultLayout: 'views/home'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    res.render('home', {layout: 'main'});
});

app.get('/contact', function(req, res) {
    res.render('contact', {layout: 'main'});
});

app.get('/about', function(req, res) {
    res.render('about', {layout: 'main'});
});

app.listen(PORT, host, function() {
    console.log("Server started.....");
});

// app.listen(port, () => {
//     console.log('App listening on port 3000!')
// })
