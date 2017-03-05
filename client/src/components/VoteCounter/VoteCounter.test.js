import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import VoteCounter from '../VoteCounter/VoteCounter';

// set up -> action -> assertions
describe('VoteCounter', () => {
  it('should display the vote count', () => {

    const threadData = {votecount: 4};
    const wrapper = shallow(<VoteCounter votes={threadData.votecount} />);

    expect(wrapper.find('.voteCount').text()).to.equal('4');
  });
});
