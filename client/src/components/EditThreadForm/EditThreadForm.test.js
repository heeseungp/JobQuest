import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import EditThreadForm from '../EditThreadForm/EditThreadForm';

// set up -> action -> assertions
describe('EditThreadForm', () => {

  it('should have 2 input text fields and a button', () => {
    const wrapper = shallow(<EditThreadForm/>);

    expect(wrapper.containsAllMatchingElements([
      <input/>,
      <input/>,
      <button>Save</button>
    ])).to.equal(true);
  })



});