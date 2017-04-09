import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import VoteCounter from '../VoteCounter/VoteCounter';

// set up -> action -> assertions
describe('VoteCounter', () => {
  it('should have two links to upvote and downvote', () => {
    const wrapper = shallow(<VoteCounter/>);
    expect(wrapper.find('a').length).to.equal(2);
  });

  it('should display the vote count', () => {
    const threadData = {votecount: 4};
    const wrapper = shallow(<VoteCounter votes={threadData.votecount} />);
    expect(wrapper.find('.voteCount').text()).to.equal('4');
  });

  // TODO
  // repetitive tests, code smelllll
  it('should call upvote when clicked', () => {
    const upvoteSpy = spy();
    const wrapper = shallow(<VoteCounter onUpvote={upvoteSpy}/>);
    const upvoteButton = wrapper.find('.upvote');

    upvoteButton.simulate('click');

    expect(upvoteSpy.calledOnce).to.equal(true);
  });

  it('should call downvote when clicked', () => {
    const downvoteSpy = spy();
    const wrapper = shallow(<VoteCounter onDownvote={downvoteSpy}/>);
    const downvoteButton = wrapper.find('.downvote');

    downvoteButton.simulate('click');

    expect(downvoteSpy.calledOnce).to.equal(true);
  });
});
