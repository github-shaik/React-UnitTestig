import { combineReducers } from 'redux';
import CommentReducer from 'reducers/comments_reducer';

export default combineReducers({
	comments: CommentReducer
})
