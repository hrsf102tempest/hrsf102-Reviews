const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const controllers = require('../database/index.js');

app.use((req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
});

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());


app.get('/restaurants/10', function (req, res) {
  console.log('THIE IS THE REQ', req)
  controllers.getReviews((err, data) => {
  	console.log('THIS BE THE req', req)
    if (err) {
      res.status(503).send(err);
    } else {
      res.send(data);
    }
  });
})


app.listen(3003, () => console.log('Example app listening on port 3003!'))