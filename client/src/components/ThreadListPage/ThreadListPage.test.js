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

  // it('passes addComment to CommentBox', () => {
  //   const wrapper = shallow(<ThreadPage/>);
  //   const CommentBox = wrapper.find('CommentBox');
  //   const addComment = wrapper.instance().addComment;
  //   expect(CommentBox.prop('onSubmit')).to.eql(addComment);
  // });


  // it('should pass editThread as a prop to EditThreadForm', () => {
  //   const wrapper = shallow(<ThreadPage/>);
  //   const EditThreadForm = wrapper.find('EditThreadForm');

  //   const editThread = wrapper.instance().editThread;
  //   expect(EditThreadForm.prop('handleEdit')).to.eql(editThread);
  // });

});