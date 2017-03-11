'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connection = mongoose.createConnection('mongodb://localhost:27017/jobquest'); 
mongoose.connect('mongodb://localhost:27017/jobquest');
var shortId = require('shortid');

var CommentSchema = new Schema({
  _id: {
    type:String,
    'default':shortId.generate
  },
  text:String,
  created_at: {
    type:Date,
    default:Date.now
  }
});

var PostSchema = new Schema({
  _id: {
    type:String,
    'default':shortId.generate
  },
  title: {
    type:String,
    required:true
  },
  thread: {
    type:String,
    required:true
  },
  author: {
    type:String,
    default:'Anonymous',
    required:true
  },
  votes: {
    type:Number,
    default:0,
    required:true
  },
  created_at: {
    type:Date,
    default:Date.now,
    required:true
  },
  comments:[CommentSchema]
});

module.exports = connection.model('Posts', PostSchema);
module.exports = connection.model('Comments', CommentSchema);