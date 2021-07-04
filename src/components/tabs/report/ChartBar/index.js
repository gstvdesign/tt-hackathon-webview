import React from 'react';
import { Typography, Box } from '@material-ui/core';

import { StyledChartContainer } from './style.css';

const ChartBar = ({ color, label, width }) => {
  return (
    <StyledChartContainer>
      <Typography
        style={{
          fontWeight: 'bold',
          fontSize: '14px',
          margin: '8px 0',
          width: '200px',
        }}
      >
        {label}
      </Typography>
      <Box
        marginLeft="16px"
        width={`${width}px`}
        height="12px"
        borderRadius="8px"
        bgcolor={color}
      />
    </StyledChartContainer>
  );
};

export default ChartBar;
