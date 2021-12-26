import { Box } from '@mui/material'

const Main = ({ children }) => {
  return (
    <Box component="main" sx={{ flex: '0 0 70%', padding: '2rem 1rem' }}>
      {children}
    </Box>
  )
}

export default Main
