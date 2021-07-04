import React from 'react';
import { Button } from '@material-ui/core';

import { StyledTitle } from '../../styles';
import {
  StyledContainer,
  StyledSubtitle,
  StyledTextField,
  StyledHint,
  StyledTitle2,
} from './styles.css';

export const RegisterTab = () => {
  return (
    <StyledContainer>
      <StyledTitle>Write the date, time spent and task</StyledTitle>
      <StyledSubtitle>
        Commas or line breaks are interpreted as a new task or a new date.
      </StyledSubtitle>
      <StyledTextField
        id="filled-basic"
        label="Today, 1h, Task 1, 3h, Task 2"
        variant="filled"
      />
      <StyledHint>Hint: You can track more then one day.</StyledHint>
      <Button style={{ marginTop: '16px' }} variant="contained" color="primary">
        Register Task
      </Button>
      <StyledTitle>
        Here are some examples of how you can write your tasks:
      </StyledTitle>
      <StyledTitle2>You can use line breaks:</StyledTitle2>
      <StyledSubtitle>Today</StyledSubtitle>
      <StyledSubtitle>2h meetings</StyledSubtitle>
      <StyledSubtitle>3h code review</StyledSubtitle>
      <StyledSubtitle>5h design check</StyledSubtitle>
      <StyledTitle2>Or commas:</StyledTitle2>
      <StyledSubtitle>
        June 16th, 2h design check, 3h meeting, 5h code review
      </StyledSubtitle>
      <StyledTitle2>And you can add more than one day:</StyledTitle2>
      <StyledSubtitle>
        Today: design check (2h) meetings (3h) code review (5h)
      </StyledSubtitle>
      <StyledSubtitle>
        Yesterday: design check (2h) meetings (3h) Sprint planning (5h)
      </StyledSubtitle>
      <StyledSubtitle>
        2 days ago: design check (2h) meetings (3h) code review (5h)
      </StyledSubtitle>
      <StyledSubtitle>
        Last tuesday: design review (2h) meetings (3h) deployment (5h)
      </StyledSubtitle>
      <StyledSubtitle>
        Last Monday: design check (2h) meetings (3h) code review (5h)
      </StyledSubtitle>
    </StyledContainer>
  );
};
