import { deepPurple } from '@mui/material/colors'
import { createTheme } from '@mui/system'

const Mytheme = createTheme ({
        palette: {
          primary: deepPurple,
          secondary: {
            main: '#ffa000',
          },
          accent: '#42a5f5',
        }
})
export default Mytheme;