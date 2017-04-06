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

  it('should have empty strings values for inputs', () => {
    const wrapper = shallow(<EditThreadForm/>);

    // title and desc are initially empty
    expect(wrapper.state('titleInput')).to.equal('');
    expect(wrapper.state('descInput')).to.equal('');
  });

  it('should prefill input values if props are passed', () => {
    var title = "This is a title";
    var desc = "This is a description";

    const wrapper = shallow(<EditThreadForm title={title} 
                                            desc={desc} />);

    // title and desc should prefill
    expect(wrapper.state('titleInput')).to.equal(title);
    expect(wrapper.state('descInput')).to.equal(desc);
  });


});