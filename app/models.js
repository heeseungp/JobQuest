'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connection = mongoose.createConnection('mongodb://localhost:27017/jobquest'); 
mongoose.connect('mongodb://localhost:27017/jobquest');
var shortId = require('shortid');
<<<<<<< HEAD
=======

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
>>>>>>> master

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

<<<<<<< HEAD
var ApplicationSchema = new Schema({

  _id: {
    type:String,
    'default':shortId.generate
 },

  company: {
    type:String,
    required:true
  },
  role: {
    type:String,
    required:true
  },
  status: {
    type:String,
    required:true
  },
  comment: {
    type:String,
    required:false
  },
  created_at: {
    type:Date,
    default:Date.now,
    required:true
  }
});

module.exports = mongoose.model('Posts', PostSchema);
module.exports = connection.model('Applications', ApplicationSchema);

=======
module.exports = connection.model('Posts', PostSchema);
module.exports = connection.model('Comments', CommentSchema);
>>>>>>> master
