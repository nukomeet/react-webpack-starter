import { combineReducers } from 'redux';

import { INCREASE } from './actions';

function counter(state={count: 0}, action) {
  let count = state.count;
  switch(action.type){
    case INCREASE:
      return {count: count + 1};
    default:
      return state;
  }
}

// const combinedReducers = combineReducers({
//   counter
// });

export default counter;

