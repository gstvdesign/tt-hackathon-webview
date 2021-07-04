import styled from 'styled-components';
import { Box, Typography } from '@material-ui/core';

export const StyledDividerContainer = styled(Box)`
  padding: 16px 0;
  border-bottom: 1px rgba(29, 28, 29, 0.11) solid;
  width: 100%;
`;

export const StyledTitleContainer = styled(Box)`
  display: flex;
  flex-direction: row;
`;

export const StyledTitle = styled(Typography)`
  font-size: 20px !important;
  font-weight: bold !important;
`;

export const StyledDuplicateButton = styled(StyledTitle)`
  margin-left: 8px !important;
  color: #3f51b5;
`;

export const StyledItemTask = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 32px;
`;

export const StyledTime = styled(Typography)`
  font-size: 16px !important;
`;

export const StyledDeleteButton = styled(StyledTime)`
  margin-left: 8px !important;
  color: #3f51b5;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledTaskContainer = styled(Box)`
  margin: 8px 0;
`;
