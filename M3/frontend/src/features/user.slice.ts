import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../app/store';

// Define a type for the slice state
export interface ICounterState {
  value: number;
}

// Define the initial state using that type
const initialState: ICounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;


export default counterSlice.reducer;
