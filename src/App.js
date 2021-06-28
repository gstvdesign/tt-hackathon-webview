import React, { useState } from 'react';
import { Tab, Tabs, ThemeProvider, TabPanel } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components';

import Header from './components/header';
import { RegisterTab, ReportTab, TaskListTab } from './components/tabs/';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    height: 100vh;
  }
`;

const materialTheme = createMuiTheme({
  palette: {
    primary: { main: '#3F51B5' },
    secondary: { main: '#FFFFFF' },
  },
});

const TAB = {
  REGISTER: 0,
  TASK_LIST: 1,
  VISUAL_REPORT: 2,
};

function App() {
  const [currentTab, setCurrentTab] = useState(TAB.REGISTER);

  const handleTabChange = (_, newTab) => {
    setCurrentTab(newTab);
  };

  const renderTab = () => {
    switch (currentTab) {
      case TAB.REGISTER:
        return <RegisterTab />;
      case TAB.TASK_LIST:
        return <TaskListTab />;
      case TAB.VISUAL_REPORT:
        return <ReportTab />;
    }
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={materialTheme}>
        <GlobalStyle />
        <div>
          <Header />
          <Tabs
            value={currentTab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleTabChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Register task" />
            <Tab label="Task List" />
            <Tab label="Visual Report" />
          </Tabs>
          {renderTab()}
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
