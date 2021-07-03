import { Button, Typography } from '@material-ui/core';
import React from 'react';

import {
  StyledDeleteButton,
  StyledDescription,
  StyledDividerContainer,
  StyledDuplicateButton,
  StyledItemTask,
  StyledTaskContainer,
  StyledTime,
  StyledTitle,
  StyledTitleContainer,
} from './styles.css';

const TaskItem = ({ item }) => {
  const { tasks, date } = item;
  return (
    <StyledDividerContainer>
      <StyledTitleContainer>
        <StyledTitle>{date} ·</StyledTitle>
        <StyledDuplicateButton> Duplicate</StyledDuplicateButton>
      </StyledTitleContainer>
      <StyledTaskContainer>
        {tasks.map(({ time, description }) => (
          <StyledItemTask>
            <StyledTime>{`${time}: ${description} ·`}</StyledTime>
            <StyledDeleteButton>Delete</StyledDeleteButton>
          </StyledItemTask>
        ))}
      </StyledTaskContainer>

      <Button style={{ width: '62px' }} color="primary" variant="contained">
        Edit
      </Button>
    </StyledDividerContainer>
  );
};

export default TaskItem;
