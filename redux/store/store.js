import {createStore, combineReducers} from 'redux';
import CommentReducers from '../reducers/CommentReeducers';

const rootReducer = combineReducers({
  comments: CommentReducers,
});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
