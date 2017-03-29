import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import CommentBox from '../CommentBox/CommentBox';
import CommentList from '../CommentList/CommentList';

// setup -> action -> assertion
describe('CommentBox', () => {
  
  // TODO (3)
  // tests to add, accepts input, call onSubmit when clicked
  // and the input box should be cleared after the click

  it('should two inputs and a CommentList', () => {
    const wrapper = shallow(<CommentBox />);
    expect(wrapper.containsAllMatchingElements([
      <input/>,
      <input/>,
      <CommentList />
    ])).to.equal(true);
  });

  it('should accept input', () => {
    // remember that when the input changes, that's an event
    // we want the target.value of that event

    const wrapper = mount(<CommentBox/>);
    const input = wrapper.find('.inputComment');
    input.simulate('change', {target: { value: 'ay, new comment' }});
    expect(wrapper.state('text')).to.equal('ay, new comment');
    expect(input.prop('value')).to.equal('ay, new comment');
  });

  it('should call onSubmit when Add Comment is clicked', () => {
    const addCommentSpy = spy();
    const wrapper = shallow(<CommentBox onSubmit={addCommentSpy}/>);
    wrapper.setState({text: 'best comment'});
    const addCommentButton = wrapper.find('#addComment');

    addCommentButton.simulate('click');

    expect(addCommentSpy.calledOnce).to.equal(true);
    expect(addCommentSpy.calledWith('best comment')).to.equal(true);
  });

  it('should clear input box when AddComment is clicked', () => {
    const addCommentSpy = spy();
    const wrapper = mount(<CommentBox onSubmit={addCommentSpy}/>);
    const inputComment = wrapper.find('.inputComment');
    const addComment = wrapper.find('#addComment');

    wrapper.setState({text: 'Nonsense'});
    addComment.simulate('click');

    expect(wrapper.state('text')).to.equal('');
    expect(inputComment.prop('value')).to.equal('');
  });

});