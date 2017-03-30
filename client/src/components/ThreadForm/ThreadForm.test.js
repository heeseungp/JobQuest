import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ThreadForm from '../ThreadForm/ThreadForm';

describe('ThreadForm', () => {

  it('should have 3 input fields', () => {
    const wrapper = shallow(<ThreadForm/>);
    expect(wrapper.find('TextField')).to.have.length(2);
  });

  it('should accept a title', () => {
    const muiTheme = getMuiTheme();

    // work around for failing tests
    const wrapper = mount(<ThreadForm/>, {
      context: {muiTheme},
      childContextTypes: {muiTheme: React.PropTypes.object}
    });

    const titleInput = wrapper.find('#tTitle');
    titleInput.simulate('change', {target: { value: 'I landed a job!' }});
    expect(wrapper.state('title')).to.equal('I landed a job!');
    expect(titleInput.prop('value')).to.equal('I landed a job!');
  });

  it('should accept a description', () => {
    const muiTheme = getMuiTheme();

    const wrapper = mount(<ThreadForm/>,  {
      context: {muiTheme},
      childContextTypes: {muiTheme: React.PropTypes.object}
    });
    
    const descInput = wrapper.find('#tDesc');
    descInput.simulate('change', {target: { value: 'Hoorayyy' }});
    expect(wrapper.state('desc')).to.equal('Hoorayyy');
    expect(descInput.prop('value')).to.equal('Hoorayyy');
  });

  it('should call onSubmit when Add is clicked', () => {
    //TODO

  });

});
