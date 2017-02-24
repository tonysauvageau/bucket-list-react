const express = require('express');
const router = express.Router();
const List = require('../models/list');
const Card = require('../models/card');

router.get('/', (req, res) => {
  List.find({ bucketId: req.query.bucketId }, ( err, buckets ) => {
    res.json(buckets);
  });
});

router.post('/', (req, res) => {
  let { bucketId, name } = req.body;
  new List({
    name,
    bucketId
  }).save( (err, list) => {
    res.json(list);
  });
});

router.delete('/:id', (req, res) => {
  List.findById(req.params.id, (err, list) => {
    list.remove();
    Card.find({'listId': req.query.id}).remove().exec( (err, list) => {
      res.status(200).send({success: true});
    });
  });
});
module.exports = router;
