import App from '@components/App';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createAppTheme } from './theme';
import { RootState } from './store';

import './styles.css';

import { persistor, store } from './store';

const ThemedApp = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const theme = React.useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemedApp />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
