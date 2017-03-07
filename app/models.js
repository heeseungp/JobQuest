'use strict';

// I put the mongoose connections here so I could
// access the mongoose connecton and initialize autoIncrement
// I will be changing this later
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection('mongodb://localhost:27017/jobquest'); 
autoIncrement.initialize(connection);
mongoose.connect('mongodb://localhost:27017/jobquest');

var PostSchema = new Schema({
  title: {
    type:String,
    required:true
  },
  thread: {
    type:String,
    required:true
  },
  votecount: {
    type:Number,
    required:true
  },
  created_at: {
    type:Date,
    required:true
  },
  comments:[{text:String, date:Date}]
});

//Uses the mongoose-auto-increment plugin to auto-increment the ID
PostSchema.plugin(autoIncrement.plugin, 'Posts');
module.exports = mongoose.model('Posts', PostSchema);