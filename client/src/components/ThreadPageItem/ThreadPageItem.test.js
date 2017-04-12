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

  // set up -> action -> assert
  it('should hide title, buttons and desc when edit flag is true', () => {

    wrapper.setState({edit: true});

    var title = wrapper.find('.title');
    var buttons = wrapper.find('#editBtns');
    var desc = wrapper.find('.desc');

    expect(title).to.have.length(0);
    expect(buttons).to.have.length(0);
    expect(desc).to.have.length(0);
  });

  it('should call handleDelete when delete button is pressed', () => {
    // test above is setting the wrapper to true...
    wrapper.setState({edit: false});

    const deleteThreadSpy = spy();
    wrapper.setProps({handleDelete: deleteThreadSpy});
    const deleteBtn = wrapper.find('#deleteThread');

    deleteBtn.simulate('click');

    expect(deleteThreadSpy.calledOnce).to.equal(true);
  });

  it('should toggle edit flag when toggleEdit is called', () => {
    var original = wrapper.state('edit');
    wrapper.instance().toggleEdit();

    expect(original).to.not.equal(!original);
  });



});
