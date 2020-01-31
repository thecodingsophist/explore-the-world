function locations(app) {

    //GET LOCATION
    app.get('/location', (req, res) => {
        var location = req.param('location');
            // modified code snippet from RapidAPI
            console.log('location is in getLocationsId: ' + location)

            var request = require("request");
            var options = {
              method: 'GET',
              url: 'https://tripadvisor1.p.rapidapi.com/locations/search',
              qs: {
                location_id: '1',
                limit: '30',
                sort: 'relevance',
                offset: '0',
                lang: 'en_US',
                currency: 'USD',
                units: 'km',
                query: location

              },
              headers: {
                'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
                'x-rapidapi-key': 'ef487ee468mshbe34d02d25cc489p1706c1jsn1869921801c8'
              }
            };

            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                     var data = JSON.parse(body);
                     let locationId = data.tracking.search_id;
                     console.log("FINALLY, THO NOT QUITE!?!: " + locationId);
                     res.send(locationId);
            });
            // console.log("FINALLY!?!: " + locationId);
        })

            // end modified RapidAPI code snippet

        // res.send(console.log(getLocationsId(location)))
        // res.render('main.handlebars')

    }

module.exports = locations
