const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define Schema
let testSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  avatar: {
    type: Array
  },
}, {
  collection: 'test'
})
module.exports = mongoose.model('Test', testSchema)