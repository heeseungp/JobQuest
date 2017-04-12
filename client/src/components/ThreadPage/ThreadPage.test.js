import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import ThreadPage from './ThreadPage';
import ThreadItem from '../ThreadItem/ThreadItem';
import ThreadPageItem from '../ThreadPageItem/ThreadPageItem';
import CommentBox from '../CommentBox/CommentBox';

// setup -> action -> assertion
describe('ThreadPage', () => {

  var wrapper = shallow(<ThreadPage />);

  beforeEach(() => {
    // set the state for the page
    var data = {
      title: 'a title',
      thread: 'a description',
      author: 'Daniel',
      _id: '1',
      authorID: '1',
      votedOn: [],
      comment: [],
      votes: 14,
      created_at: '2017-04-11'
    };

    wrapper.setState({threadData: data});
  });

  it('should render ThreadItem and CommentBox', () => {
    // const wrapper = shallow(<ThreadPage />);
    expect(wrapper.containsAllMatchingElements([
      <ThreadPageItem />,
      <CommentBox />
    ])).to.equal(true);
  });

  // this gets complicated because the ajax call needs to go through
  // in order to update the darn state, sigh
  // it('adds a new comment', () => {
  //   var data = {threadData: {comments: []}};
  //   const wrapper = shallow(<ThreadPage threadData={data} />);
  //   wrapper.instance().addComment('New Comment');
  //   console.log(wrapper.state('threadData'));
  //   expect(wrapper.state('threadData').comments).to.eql(['New Comment']);
  // });

  // test that it is passed down to Comment Box
  // same goes for all the other props, the post object + comments (3 total)
  // API, when I go on the page, I see the full post
  // and I see a comment container, with an input form at the top
  // and a list of the current comments in a list

  it('passes addComment to CommentBox', () => {
    const CommentBox = wrapper.find('CommentBox');
    const addComment = wrapper.instance().addComment;
    expect(CommentBox.prop('onSubmit')).to.eql(addComment);
  });

  // it('passes a bound addComment function to CommentBox', () => {
  //   const wrapper = shallow(<ThreadPage/>);
  //   const CommentBox = wrapper.find('CommentBox');
  //   CommentBox.prop('onSubmit')('the best comment');
  //   expect(wrapper.state('threadData').comments).to.eql(['the best comment']);
  // });

  // it('passed thread data down to ThreadItem and CommentBox', () => {
  //   const wrapper = shallow(<ThreadPage/>);
  //   const ThreadItem = wrapper.find('ThreadItem');
  //   const CommentBox = wrapper.find('CommentBox');

  //   // console.log('prop passed is, ', ThreadItem.prop('data'));
  //   expect(ThreadItem.prop('data')).to.not.eql(undefined);
  //   expect(CommentBox.prop('comments')).to.not.eql(undefined);
  // })

  it('should pass editThread as a prop to EditThreadForm', () => {
    const EditThreadForm = wrapper.find('EditThreadForm');

    const editThread = wrapper.instance().editThread;
    expect(EditThreadForm.prop('handleEdit')).to.eql(editThread);
  });

  it('passes upvoteThread to ThreadPageItem', () => {
    const ThreadPageItem = wrapper.find('ThreadPageItem');
    const upvoteThread = wrapper.instance().upvoteThread;

    // passes at first, def fn to get it to fail
    expect(ThreadPageItem.prop('onUpvote')).to.eql(upvoteThread);
  });

  it('passes downvoteThread to ThreadPageItem', () => {
    const ThreadPageItem = wrapper.find('ThreadPageItem');
    const downvoteThread = wrapper.instance().downvoteThread;

    // passes at first, def fn to get it to fail
    expect(ThreadPageItem.prop('onDownvote')).to.eql(downvoteThread);
  });

});