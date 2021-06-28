import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';

import bairesLogo from '../../assets/baires-logo.svg';
import { StyledContainer, StyledTitle } from './styles.css';

const Header = () => {
  const handleLogoutClick = () => {};

  return (
    <StyledContainer>
      <Box display="flex">
        <img src={bairesLogo} />
        <StyledTitle>Time Tracker</StyledTitle>
      </Box>
      <Button color="primary" onClick={handleLogoutClick}>
        LOGOUT
      </Button>
    </StyledContainer>
  );
};

export default Header;
