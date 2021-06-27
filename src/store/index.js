import { configureStore } from '@reduxjs/toolkit';
import timeTrackerSlice from './timetrackerSlice'

export const store = configureStore({
  reducer: {
    timeTracker: timeTrackerSlice,
  },
});
