import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import ThreadItem from './ThreadItem';
import VoteCounter from '../VoteCounter/VoteCounter';
import ThreadItemContent from '../ThreadItemContent/ThreadItemContent';

// prop passed is threadData
// it contains 4 things: votecount, title, author, comments and date posted

describe('ThreadItem', () => {
  it('should render VoteCounter and ThreadItemContent', () => {
    const wrapper = shallow(<ThreadItem/>);
    expect(wrapper.containsAllMatchingElements([
      <VoteCounter/>,
      <ThreadItemContent/>
    ])).to.equal(true);
  });
});
