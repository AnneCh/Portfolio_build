import { deepPurple, amber } from '@mui/material/colors'
import { createTheme } from '@mui/system'

const theme = createTheme ({
    palette: {
        primary: {
            main: deepPurple[800]
        },
        secondary: {
            main: amber[500]
        }
    }
})
export default theme;