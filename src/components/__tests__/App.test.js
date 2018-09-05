import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from 'components/app.js';
import CommentBox from 'components/commentBox';
import CommentList from 'components/commentList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';


let wrapper;

beforeEach(() => {
	 wrapper = shallow(
	<Provider store={createStore(reducers,{})}>
	<App/>
	</Provider>
	);	
})

it('shows comment box',() => {  
  expect(wrapper.find(CommentBox).length).toEqual(1);
})


it('shows comment list',() => {  
  expect(wrapper.find(CommentList).length).toEqual(1);	
})