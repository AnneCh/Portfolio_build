import * as React from 'react';
import Box from '@mui/material/Box';
import DarkIcon from '../imgs/dark.png';
import BrightIcon from '../imgs/light.png';
import { ColorModeContext } from './color-context.jsx';
import { ToggleButton } from '@mui/material';
import useTheme from '@mui/material';



export const ThemeButton = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
  
        return (
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'background.default',
              color: 'text.primary',
              borderRadius: 1,
              p: 3,
            }}
          >
            {theme.palette.mode} mode
            <ToggleButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? <BrightIcon /> : <DarkIcon />}
              </ToggleButton>
          </Box>
  );
}


/*
import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme]
};
https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
*/