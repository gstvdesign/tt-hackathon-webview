import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './components/header';
import HomePage from './pages/home';
import LoginPage from './pages/login';

export const AuthContext = React.createContext()

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
  const [currentUser, setCurrentUser] = useState();
  

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }} >
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
    </AuthContext.Provider>
  );
}

export default App;
