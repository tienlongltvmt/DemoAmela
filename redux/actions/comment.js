import {ADD_COMMENT} from './type';

export const addComment = commentName => {
  return {
    type: ADD_COMMENT,
    payload: commentName,
  };
};
