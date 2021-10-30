import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: ['Lato', 'Roboto', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#3D59F0',
    },
  },
})

export default theme
