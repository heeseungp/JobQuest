import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import ThreadItem from './ThreadItem';
import VoteCounter from '../VoteCounter/VoteCounter';

// prop passed is threadData
// it contains 4 things: votecount, title, author, comments and date posted

// setup -> action -> assertion
describe('ThreadItem', () => {
  
  // TODO, find a set up method
  // threadData is being passed at every test...

  // show the description based on toggle in state

  it('should render an empty div when data prop is not passed', () => {
    const wrapper = shallow(<ThreadItem />);
    expect(wrapper.find('VoteCounter')).to.have.length(0);
    expect(wrapper.find('.threadContent')).to.have.length(0);
  });

  it('should render VoteCounter', () => {
    // if data prop is not passed, it fails
    // the constructor is trying to access an undef value
    var threadData = {title: 'Study Guide', author: 'Daniel Chia',
                      comments: [], created_at: 'Sun Mar 05 2017 18:37:03 GMT-0500 (EST)', votes: 1};
    const wrapper = shallow(<ThreadItem data={threadData}/>);
    expect(wrapper.containsAllMatchingElements([
      <VoteCounter/>,
    ])).to.equal(true);
  });

  it('should not display description by default', () => {
    var threadData = {title: 'Study Guide', author: 'Daniel Chia', thread: 'hello how are you',
                      comments: [], created_at: 'Sun Mar 05 2017 18:37:03 GMT-0500 (EST)', votes: 1};
    const wrapper = shallow(<ThreadItem data={threadData}/>);
    
    expect(wrapper.find('.desc')).to.have.length(0);
  });

  it('should display description when showDesc is passed', () => {
    var threadData = {title: 'Study Guide', author: 'Daniel Chia', thread: 'hello how are you',
                      comments: [], created_at: 'Sun Mar 05 2017 18:37:03 GMT-0500 (EST)', votes: 1};
    const wrapper = shallow(<ThreadItem data={threadData} showDesc={true} />);
    
    expect(wrapper.find('.desc')).to.have.length(1);
  });

  it('pass votes to VoteCounter', () => {
    var threadData = {title: 'Study Guide', author: 'Daniel Chia',
                      comments: [], created_at: 'Sun Mar 05 2017 18:37:03 GMT-0500 (EST)', votes: 1};
    const wrapper = shallow(<ThreadItem data={threadData}/>);
    const voteCounter = wrapper.find(VoteCounter);

    expect(voteCounter.prop('votes')).to.eql(threadData.votes);
  });

  it('passes upvote and downvote to VoteCounter', () => {
    var threadData = {title: 'Study Guide', author: 'Daniel Chia',
                      comments: [], created_at: 'Sun Mar 05 2017 18:37:03 GMT-0500 (EST)', votes: 1};
    const wrapper = shallow(<ThreadItem data={threadData}/>);
    const voteCounter = wrapper.find(VoteCounter);
    const upvote = wrapper.instance().upVote;
    const downvote = wrapper.instance().downVote;

    expect(voteCounter.prop('upvote')).to.eql(upvote);
    expect(voteCounter.prop('downvote')).to.eql(downvote);
  });

  it('contains title, author, # of comments and date', () => {
    var threadData = {title: 'Study Guide', author: 'Daniel Chia',
                      comments: [], created_at: 'Sun Mar 05 2017 18:37:03 GMT-0500 (EST)', votes: 1};
    const wrapper = shallow(<ThreadItem data={threadData}/>);

    expect(wrapper.find('.title').exists()).to.eql(true);
    expect(wrapper.find('.author').exists()).to.equal(true);
    expect(wrapper.find('.numOfComments').exists()).to.equal(true);
    expect(wrapper.find('.date').exists()).to.equal(true);
  });

  it('should not contain edit and delete buttons', () => {
    var threadData = {title: 'Study Guide', author: 'Daniel Chia',
                      comments: [], created_at: 'Sun Mar 05 2017 18:37:03 GMT-0500 (EST)', votes: 1};
    const wrapper = shallow(<ThreadItem data={threadData}/>);
    expect(wrapper.containsAllMatchingElements([
      <button id="editThread">Edit</button>,
      <button id="deleteThread">Delete</button>,
    ])).to.equal(false);
  });

  it('should contain edit and delete buttons when it showDesc is true', () => {
    var threadData = {title: 'Study Guide', author: 'Daniel Chia',
                      comments: [], created_at: 'Sun Mar 05 2017 18:37:03 GMT-0500 (EST)',
                      votes: 1};
    const wrapper = shallow(<ThreadItem data={threadData} showDesc={true}/>);
    expect(wrapper.containsAllMatchingElements([
      <button id="editThread">Edit</button>,
      <button id="deleteThread">Delete</button>,
    ])).to.equal(true);
  });

});
