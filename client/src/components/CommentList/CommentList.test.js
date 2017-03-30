import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import CommentList from '../CommentList/CommentList';

// setup -> action -> assertion
describe('CommentList', () => {

  it('should render zero items', () => {
    const wrapper = shallow(<CommentList comments={[]}/>);
    expect(wrapper.find('li')).to.have.length(0);
  });

  it('should render undefined items', () => {
    const wrapper = shallow(<CommentList comments={undefined}/>);
    expect(wrapper.find('li')).to.have.length(0);
  });

  it('should render some items', () => {
    const comments = ['Sam Adams', 'Resin', 'Octoberfest'];
    const wrapper = shallow(<CommentList comments={comments}/>);
    expect(wrapper.find('li')).to.have.length(3);
  });

});
  