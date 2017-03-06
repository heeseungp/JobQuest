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
  
  it('should render VoteCounter and ThreadItemContent', () => {
    // if data prop is not passed, it fails
    // the constructor is trying to access an undef value
    const wrapper = shallow(<ThreadItem data={{}}/>);
    expect(wrapper.containsAllMatchingElements([
      <VoteCounter/>,
      <ThreadItemContent/>
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
  
});
