import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTest } from './store/timetrackerSlice'

function App() {

  const { test } = useSelector(state => state.timeTracker);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setTest());
  }

  return (
    <div>
      <p>Hello world {test}</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
