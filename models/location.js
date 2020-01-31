const mongoose = require('mongoose');

const Location = mongoose.model('Location', {
    name: String,
    id: String,
    description: String,
});

module.exports = Location
