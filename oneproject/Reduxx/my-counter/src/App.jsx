import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Reducer
const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1 };
    case 'DECREMENT':
      return { ...state, value: state.value - 1 };
    case 'RESET':
      return { ...state, value: 0 };
    default:
      return state;
  }
}

//  Store
const store = createStore(counterReducer);

//  UI Component
function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Redux Counter</h1>
      <p style={{ fontSize: '2rem' }}>{count}</p>

      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </div>
    </div>
  );
}

//  App
export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}