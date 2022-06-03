import { deepPurple } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles';
import { dark } from '@mui/material/styles/createPalette';


const Mytheme = createTheme ({
        palette: {
          mode: dark,
          primary: deepPurple,
          secondary: {
            main: '#ffa000',
          },
          accent: '#42a5f5',
        }
})
export default Mytheme;