const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bucket = new Schema({
  name: { type: String, required: true }
});

module.exports = mongoose.model( 'Bucket', Bucket );
