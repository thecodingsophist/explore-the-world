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

// // code snippet from RapidAPI
//
// var request = require("request");
// var options = {
//   method: 'GET',
//   url: 'https://tripadvisor1.p.rapidapi.com/locations/search',
//   qs: {
//     location_id: '1',
//     limit: '30',
//     sort: 'relevance',
//     offset: '0',
//     lang: 'en_US',
//     currency: 'USD',
//     units: 'km',
//     query: value
//
//   },
//   headers: {
//     'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
//     'x-rapidapi-key': 'ef487ee468mshbe34d02d25cc489p1706c1jsn1869921801c8'
//   }
// };
//
// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);
//
//     var data = JSON.parse(body);
// 	console.log(data.tracking.search_id);
// });
//
// // end RapidAPI code snippet

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

// app.listen(port, () => {
//     console.log('App listening on port 3000!')
// })

module.exports = app;
