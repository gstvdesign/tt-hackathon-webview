import React from 'react';
import { Button } from '@material-ui/core';

import {
  StyledDeleteButton,
  StyledDividerContainer,
  StyledDuplicateButton,
  StyledItemTask,
  StyledTaskContainer,
  StyledTime,
  StyledTitle,
  StyledTitleContainer,
} from './styles.css';

const MONTH_SHORT_NAME = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const TaskItem = ({ item }) => {
  const { tasks, date } = item;
  const dateSplit = date.split('/');
  const dateString = `${MONTH_SHORT_NAME[parseInt(dateSplit[0]) - 1]} ${dateSplit[1]}`;
  
  return (
    <StyledDividerContainer>
      <StyledTitleContainer>
        <StyledTitle>{dateString} ·</StyledTitle>
        <StyledDuplicateButton> Duplicate</StyledDuplicateButton>
      </StyledTitleContainer>
      <StyledTaskContainer>
        {tasks.map(({ taskTime, taskDescription }, i) => (
          <StyledItemTask id={item.id + "_" + i}>
            <StyledTime>{`${taskTime}h: ${taskDescription} ·`}</StyledTime>
            <StyledDeleteButton>Delete</StyledDeleteButton>
          </StyledItemTask>
        ))}
      </StyledTaskContainer>

      <Button style={{ width: '62px' }} color="primary" variant="contained" disabled={true}>
        Edit
      </Button>
    </StyledDividerContainer>
  );
};

export default TaskItem;
