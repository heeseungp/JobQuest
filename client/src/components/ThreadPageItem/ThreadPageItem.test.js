import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import ThreadPageItem from '../ThreadPageItem/ThreadPageItem';
import CommentBox from '../CommentBox/CommentBox';

// setup -> action -> assertion
describe('ThreadPageItem', () => {

  var wrapper = shallow(<ThreadPageItem />);

  beforeEach(() => {
    // set the state for the page
    var data = {
      title: 'a title',
      thread: 'a description',
      author: 'Daniel',
      _id: '1',
      authorID: '1',
      votedOn: [],
      comments: [],
      votes: 14,
      created_at: '2017-04-11'
    };

    wrapper.setProps({data: data});
  });

  it('should call handleDelete when delete button is pressed', () => {
    console.log(wrapper.state());
    const deleteThreadSpy = spy();
    wrapper.setProps({handleDelete: deleteThreadSpy});
    const deleteBtn = wrapper.find('#deleteThread');
    
    deleteBtn.simulate('click');

    expect(deleteThreadSpy.calledOnce).to.equal(true);
  });

});
