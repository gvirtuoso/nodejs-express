'use strict';

module.exports = function(app) {
    const sample = require('../controllers/sampleController');
    app.route('/api/status').get(sample.getStatus);
}
