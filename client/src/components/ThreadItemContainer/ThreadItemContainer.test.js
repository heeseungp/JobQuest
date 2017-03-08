import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import ThreadItem from '../ThreadItem/ThreadItem';
// import VoteCounter from '../VoteCounter/VoteCounter';
import ThreadItemContainer from '../ThreadItemContainer/ThreadItemContainer';

describe('ThreadItemContainer', () => {

  it('should render zero threads', () => {
    const wrapper = shallow(<ThreadItemContainer/>);
    expect(wrapper.find('ThreadItem')).to.have.length(0);
  });

  it('should render undefined items', () => {
    const wrapper = shallow(<ThreadItemContainer items={undefined}/>);
    expect(wrapper.find('ThreadItem')).to.have.length(0);  
  });

  it('should render some items', () => {
    const items = [
      {title: 'Study Guide', author: 'Daniel Chia', comments: [], date: 'Sun Mar 05 2017 18:37:03 GMT-0500 (EST)', votes: 1},
      {title: 'Study Guide', author: 'Daniel Chia', comments: [], date: 'Sun Mar 05 2017 18:37:03 GMT-0500 (EST)', votes: 15},
      {title: 'Study Guide', author: 'Daniel Chia', comments: [], date: 'Sun Mar 05 2017 18:37:03 GMT-0500 (EST)', votes: 7}
    ];

    const wrapper = shallow(<ThreadItemContainer items={items}/>);
    expect(wrapper.find('ThreadItem')).to.have.length(3);  
  });
  
});

