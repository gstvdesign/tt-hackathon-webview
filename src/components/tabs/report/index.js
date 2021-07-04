import React from 'react';
import { Button, Typography } from '@material-ui/core';

import { StyledContainer, StyledDivider } from './style.css';
import ChartBar from './ChartBar';

export const ReportTab = () => {
  const missingHours = '3 hours on June, 11th';
  const overTime = '4 hours';
  const totalWorkedHours = '99 hours';
  const totalWorkingHours = '160 hours';
  const reportingDays = '25 days';
  const charts = [
    {
      chart: 'Development',
      bars: [
        { width: '200', color: '#106FF3', label: 'Code Review' },
        { width: '150', color: '#25C088', label: 'Architecture definition' },
        { width: '25', color: '#FF70A1', label: 'Environment setup' },
      ],
    },
    {
      chart: 'Administrative',
      bars: [{ width: '50', color: '#FFC974', label: 'Daily Progress Report' }],
    },
    {
      chart: 'Absense',
      bars: [{ width: '50', color: '#A13DFF', label: 'Sick leave' }],
    },
  ];

  return (
    <StyledContainer>
      <Typography>You are missing {missingHours}</Typography>
      <Typography>There is overtime of {overTime}.</Typography>
      <Typography style={{ fontSize: '20px', marginTop: '16px' }}>
        This month you worked {totalWorkedHours}
      </Typography>
      <Typography>
        This month has total working hours of {totalWorkingHours}
      </Typography>
      <StyledDivider />
      <Typography style={{ fontSize: '24px', marginBottom: '16px' }}>
        You need to send your report in {reportingDays}
      </Typography>
      <Button variant="contained" color="primary">
        Send monthly report
      </Button>
      <StyledDivider />
      <Typography
        style={{ fontSize: '20px', fontWeight: 'bold', margin: '16px 0' }}
      >
        Visual Report
      </Typography>
      {charts.map(({ bars, chart }, index) => (
        <div>
          <Typography>{chart}</Typography>
          {bars.map(({ color, label, width }) => (
            <ChartBar width={width} label={label} color={color} />
          ))}
          {index !== charts.length - 1 && <StyledDivider />}
        </div>
      ))}
    </StyledContainer>
  );
};
