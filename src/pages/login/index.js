import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from "../../App";

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

  const onSubmit = data => {
    console.log(data);
    
    console.log(auth);
    if(data.username === "guest@bairesdev.com" && data.password === "1234"){
      auth.setCurrentUser(data.username);
      history.push("/home");
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
      </StyledContainer>

      );
};

export default LoginPage;
