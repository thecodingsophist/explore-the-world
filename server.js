const express = require('express');
const exphbs = require("express-handlebars");

const app = express();
const port = 3000;

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


app.listen(port, () => {
    console.log('App listening on port 3000!')
})
