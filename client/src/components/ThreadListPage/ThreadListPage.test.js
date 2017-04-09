import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import ThreadListPage from './ThreadListPage';

// setup -> action -> assertion
describe('ThreadListPage', () => {
  
  // TODO
  // still gotta find a way to test ajax
  // a component that gets its data from a request
  // how do you test that?

  it('should pass threads to ThreadItemContainer', () => {
    const wrapper = mount(<ThreadListPage/>);
    const ThreadItemContainer = wrapper.find('ThreadItemContainer');

    // could not access the props with an argument thus the ugly syntax
    expect(ThreadItemContainer.props()['threads']).to.equal(undefined);
  });

  it('passes upvoteThread to ThreadItemContainer', () => {
    const wrapper = shallow(<ThreadListPage/>);
    const ThreadItemContainer = wrapper.find('ThreadItemContainer');
    const upvoteThread = wrapper.instance().upvoteThread;

    // passes at first, def fn to get it to fail
    expect(ThreadItemContainer.prop('onUpvote')).to.eql(upvoteThread);
  });

  it('passes downvoteThread to ThreadItemContainer', () => {
    const wrapper = shallow(<ThreadListPage/>);
    const ThreadItemContainer = wrapper.find('ThreadItemContainer');
    const downvoteThread = wrapper.instance().downvoteThread;

    // passes at first, def fn to get it to fail
    expect(ThreadItemContainer.prop('onDownvote')).to.eql(downvoteThread);
  });


});