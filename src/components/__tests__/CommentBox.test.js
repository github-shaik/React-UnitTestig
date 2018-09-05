import React from 'react';
import CommentBox from 'components/commentBox';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

let wrapper;

beforeEach(()=>{
 wrapper = mount(
 	<Provider store={createStore(reducers,{})}>
 	<CommentBox/>
 	</Provider>
 	);	
})

afterEach(()=>{
 wrapper.unmount();
})

it('has text area and button',() => {
	expect(wrapper.find("textarea").length).toEqual(1);
	expect(wrapper.find("button").length).toEqual(1);
})

describe('text area tests',() => {

beforeEach(()=>{
	wrapper.find("textarea").simulate("change",{target:{value:"new comment"}});
	wrapper.update();
})	

it('has a text area that users can type',() => {	
	expect(wrapper.find("textarea").prop('value')).toEqual('new comment');
})

it('text area is emptied when form is  submitted',() => {
	wrapper.find("form").simulate("submit");
	wrapper.update();
	expect(wrapper.find("textarea").prop('value')).toEqual('');
})



})