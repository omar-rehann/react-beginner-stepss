import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    reset: (state) => { state.value = 0; },
  },
});
const store = configureStore({
  reducer: counterSlice.reducer,
});
const { increment, decrement, reset } = counterSlice.actions;

function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: 'center', marginTop: '3rem', fontFamily: 'Arial' }}>
      <h1>Redux Toolkit Counter</h1>
      <h2>{count}</h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

    </div>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}