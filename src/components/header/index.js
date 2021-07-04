import React from 'react';
import { Box, Button } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

import bairesLogo from '../../assets/baires-logo.svg';
import { StyledContainer, StyledTitle } from './styles.css';

const Header = () => {
  const location = useLocation();
  return (
    <StyledContainer>
      <Box display="flex">
        <img alt="BairesDev Logo" src={bairesLogo} />
        <StyledTitle>Time Tracker</StyledTitle>
      </Box>
      {location.pathname === '/home' && (
        <Link to="/">
          <Button color="primary">LOGOUT</Button>
        </Link>
      )}
    </StyledContainer>
  );
};

export default Header;
