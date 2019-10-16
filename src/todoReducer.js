import { createStore } from 'redux';

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const CHANGE_VISIBILITY_FILTER = 'CHANGE_VISIBILITY_FILTER';
function addTodo(text) {
  return { type: ADD_TODO, text };
}

function toggleTodo(todo) {
  return { type: TOGGLE_TODO, todo };
}

function todoReducer(state = { id: 0, todos: [] }, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: ++state.id, text: action.text, done: false }];
    case TOGGLE_TODO:
      return state.map(x => {
        if (x === action.todo) {
          return { ...x, done: !x.done };
        }
        return x;
      });
    default:
      return state;
  }
}

function visibilityReducer(state = 'all', action) {
  switch (action.type) {
    case CHANGE_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
}

function combineReducer(input) {
  return function(state = {}, action) {
    const newState = {};
    Object.keys(input).map(x => {
      newState[x] = input[x](state[x], action);
    });
    return newState;
  };
}

const reducer = combineReducer({
  todo: todoReducer,
  visibilityFilter: visibilityReducer
});
const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo('Get Milk'));
store.dispatch(addTodo('Get Kooft'));
store.dispatch(addTodo('Get Maraz'));
// store.dispatch(toggleTodo(store.getState()[0]))
