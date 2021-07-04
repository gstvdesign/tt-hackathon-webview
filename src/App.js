import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './components/header';
import HomePage from './pages/home';
import LoginPage from './pages/login';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    height: 100vh;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

const materialTheme = createMuiTheme({
  palette: {
    primary: { main: '#3F51B5' },
    secondary: { main: '#FFFFFF' },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={materialTheme}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
