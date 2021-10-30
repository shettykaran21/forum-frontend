import { Container, Box } from '@mui/material'

import Sidebar from '@components/layout/sidebar'

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '4rem',
          marginTop: '2rem',
        }}
      >
        {children}
      </Container>
    </Box>
  )
}

export default Layout
