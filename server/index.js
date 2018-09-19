const express = require('express')
const app = express();
// const bodyParser = require('body-parser');
const controllers = require('../database/index.js');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use((req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
});

app.use('/biz/', express.static(__dirname + '/../client/dist'));

// app.use(bodyParser.json());


app.get('/restaurants/:restaurantId', function (req, res) {
  controllers.getReviews(req.params.restaurantId, (err, data) => {
    if (err) {
      res.status(503).send(err);
    } else {
      // console.log('this is the restaurant data', data)
      res.send(JSON.stringify(data));
    }
  });
})

app.get('/reviewers', function (req, res) {
  controllers.getReviewers((err, data) => {
    if (err) {
      res.status(503).send(err);
    } else {
      // console.log('this is the reviewer data', data)
      res.send(data);
    }
  });
})


app.listen(3003, () => console.log('Example app listening on port 3003!'))