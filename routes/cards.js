const express = require('express');
const router = express.Router();
const Card = require('../models/card');

router.get('/', (req, res) => {
  Card.find({ listId: req.query.listId }, ( err, cards ) => {
    res.json(cards);
  });
});

router.post('/', (req, res) => {
  let { listId, name } = req.body;
  new Card({
    name,
    listId
  }).save( (err, list) => {
    res.json(list);
  });
});

router.delete('/:id', (req, res) => {
  Card.findById(req.params.id, (err, card) => {
    card.remove();
    res.status(200).send({success: true});
  });
});

module.exports = router;
