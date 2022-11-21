

const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const newRouter = require('./router.js');

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

MongoClient.connect('mongodb://127.0.0.1:27017') 
  .then((client) => {
    const db = client.db('react'); 
    const staffCollection = db.collection('react'); 
    const staffRouter = newRouter(staffCollection); 
  
    app.use('/api/staff', staffRouter); 
  })
  .catch(console.err);

app.listen(4000, function () {
  console.log(`Listening on this port: ${this.address().port}`);
});