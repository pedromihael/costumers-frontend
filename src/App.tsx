import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { light, dark } from './themes';
import GlobalTheme from './base/global';
import { usePersistedState } from './state/hooks/usePersistedState';

import CostumersProvider from './state/contexts/CostumersContext';
import Home from './layout/pages/Home';
import CostumerPage from './layout/pages/CostumerPage';

import { Home as MaterialHome } from './layout/pages/material/Home';

import MaterialThemeProvider from './state/contexts/MaterialThemeContext';

import ActionsProvider from './state/contexts/ActionsContext';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const handleThemeSwitching = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <>
      <ActionsProvider>
        <CostumersProvider>
          <ReactTooltip />
          {/* styled-components frontend */}
          <ThemeProvider theme={theme}>
            <GlobalTheme />
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home handleThemeSwitching={handleThemeSwitching} />
                </Route>
                <Route path="/costumer/:name">
                  <CostumerPage handleThemeSwitching={handleThemeSwitching} />
                </Route>
              </Switch>
            </Router>
          </ThemeProvider>

          {/* material ui frontend */}
          <MaterialThemeProvider>
            <Router>
              <Switch>
                <Route exact path="/material">
                  <MaterialHome />
                </Route>
              </Switch>
            </Router>
          </MaterialThemeProvider>
        </CostumersProvider>
      </ActionsProvider>
    </>
  );
}

export default App;
