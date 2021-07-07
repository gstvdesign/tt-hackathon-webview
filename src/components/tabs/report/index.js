import React, { useState } from 'react';
import { Button, Typography, Modal, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { StyledContainer, StyledDivider, ModalBox } from './style.css';
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

  const [open, setOpen] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false); 

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
    setTimeout(handleOpenSnackbar, 1000);
  }
  const handleCancel = () => {
    setOpen(false);
  }

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  }
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  }

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
      <Button onClick={handleOpen} variant="contained" color="primary">
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
      <Modal
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        open={open}
      >
        <ModalBox>
          <Typography style={{ fontSize: '24px', fontWeight: 'bold', margin: '16px 0' }}>
            Send monthly report
          </Typography>
          <Typography style={{ fontSize: '20px', fontWeight: 'bold', margin: '16px 0', color: 'gray' }}>Project Delivery Team</Typography>
          <Typography style={{color: 'gray', fontWeight: 'bold'}}>Monthly hours</Typography>
          <Typography style={{color: 'gray', marginBottom: '20px'}}>160 hours</Typography>
          <Typography style={{color: 'gray', fontWeight: 'bold'}}>Hours worked</Typography>
          <Typography style={{color: 'gray', marginBottom: '20px'}}>180 hours</Typography>
          <Typography style={{color: 'gray', fontWeight: 'bold'}}>Monthly Fee</Typography>
          <Typography style={{color: 'gray', marginBottom: '20px'}}>US$ 500</Typography>
          <Typography style={{color: 'gray', fontWeight: 'bold'}}>Total</Typography>
          <Typography style={{color: 'gray', marginBottom: '20px'}}>US$ 562</Typography>
          <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <Button style={{ fontWeight: 'bold'}} onClick={handleCancel} variant="text" color="primary">
              Cancel
            </Button>
            <Button style={{ fontWeight: 'bold'}} onClick={handleClose} variant="text" color="primary">
              Send Report
            </Button>
          </div>
        
        </ModalBox>
        
      </Modal>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert elevation={6} on onClose={handleCloseSnackbar} variant="filled" severity="success">Report sent successfully!</Alert>
      </Snackbar>
    </StyledContainer>
  );
};
