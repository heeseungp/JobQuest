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
  });

  it('should have empty strings values for inputs', () => {
    const wrapper = shallow(<EditThreadForm/>);

    // title and desc are initially empty
    expect(wrapper.state('titleInput')).to.equal('');
    expect(wrapper.state('descInput')).to.equal('');
  });

  it('should prefill state if props are passed', () => {
    var title = "This is a title";
    var desc = "This is a description";

    const wrapper = shallow(<EditThreadForm title={title} 
                                            desc={desc} />);

    // title and desc should prefill
    expect(wrapper.state('titleInput')).to.equal(title);
    expect(wrapper.state('descInput')).to.equal(desc);
  });

  it('should accept a title', () => {
    // mount is needed, otherwise props pops up empty
    const wrapper = mount(<EditThreadForm/>);
    const titleInput = wrapper.find('#editTitle');

    // have to provide target.name in the test, not free
    titleInput.simulate('change', {target: { value: 'I landed a job!',
                                             name: 'titleInput'}});
    
    expect(wrapper.state('titleInput')).to.equal('I landed a job!');
    expect(titleInput.prop('value')).to.equal('I landed a job!');
  });

  it('should accept a description', () => {
    // mount is needed, otherwise props pops up empty
    const wrapper = mount(<EditThreadForm/>);
    const descInput = wrapper.find('#editDesc');

    descInput.simulate('change', {target: { value: 'a new description',
                                            name: 'descInput' }});
    
    expect(wrapper.state('descInput')).to.equal('a new description');
    expect(descInput.prop('value')).to.equal('a new description');    
  });

  it('should call onEdit prop when save is clicked', () => {
    // was failing when the since the click is now calling another function as well
    // this is weird
    const editPostSpy = spy();
    const toggleSpy = spy();
    const wrapper = shallow(<EditThreadForm handleEdit={editPostSpy} 
                                            handleToggle={toggleSpy} />);
    const addButton = wrapper.find('button');

    addButton.simulate('click');

    expect(editPostSpy.calledOnce).to.equal(true);
    expect(toggleSpy.calledOnce).to.equal(true);
  });

});