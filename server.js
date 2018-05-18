const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const sampleRoutes = require('./api/routes/sampleRoutes');
sampleRoutes(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('POC server started on: ' + port);
