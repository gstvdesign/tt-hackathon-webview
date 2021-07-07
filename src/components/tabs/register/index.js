import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Snackbar } from '@material-ui/core';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';


import { StyledTitle } from '../../styles';
import {
  StyledContainer,
  StyledSubtitle,
  StyledTextField,
  StyledHint,
  StyledTitle2,
} from './styles.css';

export const RegisterTab = () => {
  const { handleSubmit, register } = useForm();

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  }
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  }

  const onSubmit = data => {
    // TODO: Send request to service
    console.log(data);
    axios.post('http://localhost:4000/dev/tasks', {
      user_id: 1,
      user_name: "Guest",
      text: data.rawInput
    }).then(data => console.log(data))
    .then(handleOpenSnackbar);
  }

  return (
    <StyledContainer>
      <form id="rawInput" onSubmit={handleSubmit(onSubmit)}>
        <StyledTitle>Write the date, time spent and task</StyledTitle>
        <StyledSubtitle>
          Commas or line breaks are interpreted as a new task or a new date.
        </StyledSubtitle>
        <StyledTextField
          id="filled-basic"
          label="Today: Task 1 1h, Task 2 3h"
          variant="filled"
          {...register("rawInput")}
        />
        <StyledHint>Hint: You can track more then one day.</StyledHint>
        <Button type="submit" form="rawInput" style={{ marginTop: '16px' }} variant="contained" color="primary">
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
          June 16: design check 2h, meeting 3h, code review 5h
        </StyledSubtitle>
        <StyledTitle2>And you can add more than one day:</StyledTitle2>
        <StyledSubtitle>
          Today: design check 2h, meetings 3h, code review 5h
        </StyledSubtitle>
        <StyledSubtitle>
          Yesterday: design check 2h, meetings 3h, Sprint planning 5h
        </StyledSubtitle>
        <StyledSubtitle>
          2 days ago: design check 2h, meetings 3h, code review 5h
        </StyledSubtitle>
        <StyledSubtitle>
          Last tuesday: design review 2h, meetings 3h, deployment 5h
        </StyledSubtitle>
        <StyledSubtitle>
          Last Monday: design check 2h, meetings 3h, code review 5h
        </StyledSubtitle>
      </form>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert elevation={6} on onClose={handleCloseSnackbar} variant="filled" severity="success">Tasks sent successfully!</Alert>
      </Snackbar>
    </StyledContainer>
  );
};
