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
  
});

