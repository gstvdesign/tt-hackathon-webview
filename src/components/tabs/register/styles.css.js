import styled from 'styled-components';
import { Box, TextField, Typography } from '@material-ui/core';

export const StyledContainer = styled(Box)`
  margin-left: 98px;
  height: 100%;
  width: 50%;
`;

export const StyledTitle = styled(Typography)`
  font-size: 34px !important;
  font-weight: 400 !important;
  color: #3f51b5;
  margin-top: 32px !important;
  margin-bottom: 16px !important;
`;

export const StyledSubtitle = styled(Typography)`
  color: rgba(29, 28, 29, 0.7);
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  margin: 8px 0 !important;
`;

export const StyledHint = styled(Typography)`
  color: rgba(29, 28, 29, 0.7);
  font-size: 14px !important;
`;

export const StyledTitle2 = styled(Typography)`
  margin-top: 16px !important;
  color: rgba(29, 28, 29, 0.7);
  font-size: 18px !important;
`;
