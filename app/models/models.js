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

var UserSchema = new Schema({
  _id: {
    type:String,
    'default':shortId.generate
  },
  userName: {
    type:String,
    unique:[true, 'This username is already taken'],  // Check uniqueness in controller when creating user
    required:true
  },
  password: {
    type:String,
    min: [8, 'Minimum length for passsword is 8 characters'],
    required:true
  },
  email: {  // Controller should verify email format before insertion
    type:String,
    unique:[true, 'This email is already taken'],  // Check uniqueness in controller when creating user
    required:true
  },
  joined_at: {
    type:Date,
    default:Date.now,
    required:true
  }
});

module.exports = mongoose.model('Posts', PostSchema);
module.exports = connection.model('Applications', ApplicationSchema);
module.exports = connection.model('Comments', CommentSchema);

