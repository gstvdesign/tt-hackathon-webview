import styled, { css } from 'styled-components';
import { Box, Button, TextField } from '@material-ui/core';

import { StyledTitle } from '../../components/styles';

export const StyledContainer = styled(Box)`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled(StyledTitle)`
  text-align: center;
`;

export const StyledFormContainer = styled(Box)`
  margin-top: 32px;
`;

export const StyledTextFieldContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  width: 100%;
`;

export const StyledTextField = styled(TextField)`
  width: 250px;
  ${({ $margin }) =>
    $margin &&
    css`
      margin-top: 16px !important;
    `}
`;

export const StyledButton = styled(Button)`
  width: 250px;
  margin-top: 32px !important;
`;
