import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from "../../App";
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import {
  StyledButton,
  StyledContainer,
  StyledFormContainer,
  StyledText,
  StyledTextField,
  StyledTextFieldContainer,
} from './styles.css';

const LoginPage = (props) => {
  const { handleSubmit, register } = useForm();
  const history = useHistory();

  const auth = React.useContext(AuthContext);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  }
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  }

  const onSubmit = data => {
    if(data.username === "guest@bairesdev.com" && data.password === "1234"){
      auth.setCurrentUser(data.username);
      history.push("/home");
    }
    else {
      handleOpenSnackbar();
    }
  }

  return (
      <StyledContainer>
      <StyledFormContainer>
        <form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <StyledText>Welcome to the BairesDev TimeTracker.</StyledText>
          <StyledTextFieldContainer>
            <StyledTextField label="Username" {...register("username", { required: true })} />
            <StyledTextField $margin label="Password" type="password" {...register("password", { required: true })}/>
              <StyledButton type="submit" form="loginForm" variant="contained" color="primary">
                Login
              </StyledButton>
            </StyledTextFieldContainer>
          </form>
        </StyledFormContainer>
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert elevation={6} on onClose={handleCloseSnackbar} variant="filled" severity="error">Login failed: Please verify your credentials or contact support.</Alert>
        </Snackbar>
      </StyledContainer>

      );
};

export default LoginPage;
