import { useState, useMemo } from "react";
import ReactSwitch from "react-switch";



function ToggleColorMode() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  }

export const ThemeContext = createContext(null);


export default function NightToggle() {

    return(
        <ReactSwitch onChange={ToggleColorMode} checked={theme === "dark"}/>
    )
}

