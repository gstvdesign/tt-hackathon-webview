import { TextField } from '@material-ui/core';
import React from 'react';

import { StyledContainer, StyledDateContainer } from './style.css';
import TaskItem from './taskItem';

const MOCKED_TASKS = [
  {
    date: 'June, 15th',
    tasks: [
      {
        description: 'Design',
        time: '2h',
      },
      {
        description: 'Written User Stories',
        time: '3h',
      },
      {
        description: 'Other - Meetings',
        time: '2h',
      },
      {
        description: 'Code Review',
        time: '2h',
      },
    ],
  },
  {
    date: 'June, 15th',
    tasks: [
      {
        description: 'Design',
        time: '2h',
      },
      {
        description: 'Written User Stories',
        time: '3h',
      },
      {
        description: 'Other - Meetings',
        time: '2h',
      },
      {
        description: 'Code Review',
        time: '2h',
      },
    ],
  },
  {
    date: 'June, 15th',
    tasks: [
      {
        description: 'Design',
        time: '2h',
      },
      {
        description: 'Written User Stories',
        time: '3h',
      },
      {
        description: 'Other - Meetings',
        time: '2h',
      },
      {
        description: 'Code Review',
        time: '2h',
      },
    ],
  },
];

export const TaskListTab = () => {
  return (
    <StyledContainer>
      <StyledDateContainer>
        <TextField
          type="date"
          label="Pick a starting date:"
          value=""
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          style={{ marginLeft: '16px' }}
          type="date"
          label="Pick a starting date:"
          value=""
          InputLabelProps={{
            shrink: true,
          }}
        />
      </StyledDateContainer>
      {MOCKED_TASKS.map((item) => (
        <TaskItem item={item} />
      ))}
    </StyledContainer>
  );
};
