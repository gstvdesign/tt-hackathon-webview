import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';

import { RegisterTab, ReportTab, TaskListTab } from '../../components/tabs';

const TAB = {
  REGISTER: 0,
  TASK_LIST: 1,
  SEND_REPORT: 2,
};

const HomePage = () => {
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
      case TAB.SEND_REPORT:
        return <ReportTab />;
      default:
        return <></>;
    }
  };
  return (
    <div>
      <Tabs
        value={currentTab}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleTabChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Register task" />
        <Tab label="Task List" />
        <Tab label="Send Report" />
      </Tabs>
      {renderTab()}
    </div>
  );
};

export default HomePage;
