
const express = require('express');
const ObjectID = require('mongodb').ObjectID;

// This function will hold all the routing functionality for the database, and will be used in server.js
const newRouter = function (collection) {

  const router = express.Router();
  

  // Route for getting all staff data
  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch(console.log("error"));
  });

  // Route for getting specific staff data
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((doc) => res.json(doc))
      .catch(console.log("error"));
  });

  // Route for deleting specific staff 
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .deleteOne({ _id: ObjectID(id) })
      .then(() => collection.find().toArray())
      .then((docs) => res.json(docs))
      .catch(console.log("error"));
  });



  router.post('/', function(req, res){
    collection.insertOne({ text:req.body }, function(err, info){
      console.log(info.acknowledged)
       console.log(info.acknowledged)
      res.json(info.acknowledged)
    })
}) 


  // Route for updating specific staff
 router.put('/:id', (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    
    collection
    .findOneAndUpdate({ _id: ObjectID(itemId) }, { $set: updatedItem })
    .then(result => {
      res.json(result.value);
    })
    .catch(console.log("error"));
  });
  
  
  return router;

};

module.exports = newRouter;