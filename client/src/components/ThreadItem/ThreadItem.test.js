import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import ThreadItem from './ThreadItem';
import VoteCounter from '../VoteCounter/VoteCounter';
import ThreadItemContent from '../ThreadItemContent/ThreadItemContent';

// prop passed is threadData
// it contains 4 things: votecount, title, author, comments and date posted

// setup -> action -> assertion
describe('ThreadItem', () => {
  
  // TODO, find a set up method
  // threadData is being passed at every test...

  it('should render VoteCounter', () => {
    // if data prop is not passed, it fails
    // the constructor is trying to access an undef value
    var threadData = {title: 'Study Guide', author: 'Daniel Chia',
                      comments: [], date: '"Sun Mar 05 2017 18:37:03 GMT-0500 (EST)"', votes: 1};
    const wrapper = shallow(<ThreadItem data={threadData}/>);
    expect(wrapper.containsAllMatchingElements([
      <VoteCounter/>,
    ])).to.equal(true);
  });

  it('add one on upvote', () => {
    var threadData = {title: 'Study Guide', author: 'Daniel Chia',
                      comments: [], date: '"Sun Mar 05 2017 18:37:03 GMT-0500 (EST)"', votes: 1};
    const wrapper = shallow(<ThreadItem data={threadData}/>);
    wrapper.instance().upVote();

    expect(wrapper.state('votes')).to.eql(threadData.votes+1);
  });

  it('subtract one on downvote', () => {
    var threadData = {title: 'Study Guide', author: 'Daniel Chia',
                      comments: [], date: '"Sun Mar 05 2017 18:37:03 GMT-0500 (EST)"', votes: 1};
    const wrapper = shallow(<ThreadItem data={threadData}/>);
    wrapper.instance().downVote();

    expect(wrapper.state('votes')).to.eql(threadData.votes-1);
  });

  it('pass votes to VoteCounter', () => {
    var threadData = {title: 'Study Guide', author: 'Daniel Chia',
                      comments: [], date: '"Sun Mar 05 2017 18:37:03 GMT-0500 (EST)"', votes: 1};
    const wrapper = shallow(<ThreadItem data={threadData}/>);
    const voteCounter = wrapper.find(VoteCounter);

    expect(voteCounter.prop('votes')).to.eql(threadData.votes);
  });

  it('passes upvote and downvote to VoteCounter', () => {
    var threadData = {title: 'Study Guide', author: 'Daniel Chia',
                      comments: [], date: '"Sun Mar 05 2017 18:37:03 GMT-0500 (EST)"', votes: 1};
    const wrapper = shallow(<ThreadItem data={threadData}/>);
    const voteCounter = wrapper.find(VoteCounter);
    const upvote = wrapper.instance().upVote;
    const downvote = wrapper.instance().downVote;

    expect(voteCounter.prop('upvote')).to.eql(upvote);
    expect(voteCounter.prop('downvote')).to.eql(downvote);
  });

  it('contains title, author, # of comments and date', () => {
    var threadData = {title: 'Study Guide', author: 'Daniel Chia',
                      comments: [], date: 'Sun Mar 05 2017 18:37:03 GMT-0500 (EST)', votes: 1};
    const wrapper = shallow(<ThreadItem data={threadData}/>);

    expect(wrapper.find('.title').exists()).to.eql(true);
    expect(wrapper.find('.author').exists()).to.equal(true);
    expect(wrapper.find('.numOfComments').exists()).to.equal(true);
    expect(wrapper.find('.date').exists()).to.equal(true);
  });
});
