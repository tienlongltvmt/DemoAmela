import {ADD_COMMENT} from '../actions/type';

const initialState = {
  commentName: '',
  comments: [],
};

const CommentReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: state.comments.concat({
          key: Math.random(),
          value: action.payload,
        }),
      };
    default:
      return state;
  }
};
export default CommentReducers;
