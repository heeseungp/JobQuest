import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import ThreadPage from './ThreadPage';
import ThreadItem from '../ThreadItem/ThreadItem';
import CommentBox from '../CommentBox/CommentBox';

// setup -> action -> assertion
describe('ThreadItem', () => {
  
  // TODO
  // threaditem and a comment box are rendered

  it('should render ThreadItem and CommentBox', () => {
    const wrapper = shallow(<ThreadPage />);
    expect(wrapper.containsAllMatchingElements([
      <ThreadItem />,
      <CommentBox />
    ])).to.equal(true);
  });

});