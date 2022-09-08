import styled from 'styled-components';
import { Box, Divider } from '@material-ui/core';

export const StyledContainer = styled(Box)`
  margin-left: 98px;
  margin-top: 32px;
  width: 50%;
`;

export const StyledDivider = styled(Divider)`
  margin: 16px 0 !important;
`;

export const ModalBox = styled(Box)`
  height: 450px;
  width: 320px;
  background-color: white;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  padding: 20px;
`
