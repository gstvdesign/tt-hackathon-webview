import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  test: 0  
};

export const timeTrackerSlice = createSlice({
  name: 'timetracker',
  initialState,
  reducers: {
    setTest: (state) => {
      state.test++;
    }
  },  
});

export const { setTest } = timeTrackerSlice.actions;

export default timeTrackerSlice.reducer;
