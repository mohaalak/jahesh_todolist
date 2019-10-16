import { expect } from 'chai';

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
  return state;
}

let state = counterReducer(undefined, {});
console.log(state);
expect(state).to.be.equal(0);

state = counterReducer(state, { type: 'INCREMENT' });
console.log(state);
expect(state).to.equal(1);

state = counterReducer(state, { type: 'DECREMENT' });
console.log(state);
expect(state).to.equal(0);

function createStore(reducer) {
  let state = reducer(undefined, {});

  let callback;
  function dispatch(action) {
    const newState = reducer(state, action);
    if (state !== newState) {
      state = newState;
      if (callback) {
        callback(state);
      }
    }
  }

  function getState() {
    return state;
  }

  function subscribe(cb) {
    callback = cb;
  }

  return {
    dispatch,
    getState,
    subscribe
  };
}

const store = createStore(counterReducer);
store.subscribe(state => {
  console.log(state);
});
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
