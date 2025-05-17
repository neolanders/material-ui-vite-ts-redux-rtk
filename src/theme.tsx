import { createTheme, ThemeOptions } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const getThemeOptions = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: mode === 'light' ? '#f5f5f5' : '#121212',
      paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
    },
    text: {
      primary: mode === 'light' ? 'rgba(0, 0, 0, 0.87)' : '#fff',
      secondary: mode === 'light' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.7)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body, #root': {
          backgroundColor: mode === 'light' ? '#f5f5f5' : '#121212',
          minHeight: '100vh',
          margin: 0,
          padding: 0,
        },
        body: {
          scrollbarColor: mode === 'dark' ? '#6b6b6b #2b2b2b' : '#6b6b6b #f5f5f5',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: mode === 'dark' ? '#2b2b2b' : '#f5f5f5',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: mode === 'dark' ? '#6b6b6b' : '#6b6b6b',
            minHeight: 24,
            border: mode === 'dark' ? '3px solid #2b2b2b' : '3px solid #f5f5f5',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'light' ? '#556cd6' : '#1a1a1a',
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiPaginationItem-root': {
            color: mode === 'light' ? 'rgba(0, 0, 0, 0.87)' : '#fff',
          },
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: mode === 'light' ? 'rgba(85, 108, 214, 0.12)' : 'rgba(85, 108, 214, 0.3)',
            '&:hover': {
              backgroundColor: mode === 'light' ? 'rgba(85, 108, 214, 0.2)' : 'rgba(85, 108, 214, 0.4)',
            },
          },
        },
      },
    },
  },
});

export const createAppTheme = (mode: 'light' | 'dark') => createTheme(getThemeOptions(mode));

export default createAppTheme('light');
