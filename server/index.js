const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3003, () => console.log('Example app listening on port 3003!'))