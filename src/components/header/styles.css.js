import styled from 'styled-components';
import { Typography, Box } from '@material-ui/core';

export const StyledContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  img {
    height: 20px;
    width: auto;
    margin-right: 16px;
  }
`;

export const StyledTitle = styled(Typography)`
  font-weight: 700 !important;
  color: #3f51b5;
`;
