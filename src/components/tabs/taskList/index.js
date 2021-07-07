import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';

import { StyledContainer, StyledDateContainer } from './style.css';
import TaskItem from './taskItem';
import axios from 'axios';


export const TaskListTab = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get('http://d3ba54e4f82c.ngrok.io/dev/tasks/1');
      setTasks(response.data.data);
    })();
  },[])
  return (
    <StyledContainer>
      <StyledDateContainer>
        <TextField
          type="date"
          label="From date:"
          value=""
          InputLabelProps={{
            shrink: true,
          }}
          disabled={true}
        />
        <TextField
          style={{ marginLeft: '16px' }}
          type="date"
          label="To date:"
          value=""
          InputLabelProps={{
            shrink: true,
          }}
          disabled={true}
        />
      </StyledDateContainer>
      {tasks.map((item) => (
        <TaskItem item={item} />
      ))}
    </StyledContainer>
  );
};
