import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import CommentBox from '../CommentBox/CommentBox';
import CommentList from '../CommentList/CommentList';

// setup -> action -> assertion
describe('CommentBox', () => {
  
  // TODO

  it('should two inputs and a CommentList', () => {
    const wrapper = shallow(<CommentBox />);
    expect(wrapper.containsAllMatchingElements([
      <input/>,
      <input/>,
      <CommentList />
    ])).to.equal(true);
  });

});