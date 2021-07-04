import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledButton,
  StyledContainer,
  StyledFormContainer,
  StyledText,
  StyledTextField,
  StyledTextFieldContainer,
} from './styles.css';

const LoginPage = () => {
  return (
    <StyledContainer>
      <StyledFormContainer>
        <StyledText>Welcome to the BairesDev TimeTracker.</StyledText>
        <StyledTextFieldContainer>
          <StyledTextField label="Username" />
          <StyledTextField $margin label="Password" type="password" />
          <Link to="/home">
            <StyledButton variant="contained" color="primary">
              Login
            </StyledButton>
          </Link>
        </StyledTextFieldContainer>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default LoginPage;
