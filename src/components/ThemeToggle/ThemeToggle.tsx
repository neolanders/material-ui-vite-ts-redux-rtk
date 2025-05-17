import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { toggleTheme } from '@/features/theme/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
      <IconButton
        onClick={() => dispatch(toggleTheme())}
        color="inherit"
        sx={{ ml: 1 }}
      >
        {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle; 