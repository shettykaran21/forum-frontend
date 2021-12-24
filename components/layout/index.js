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
          alignItems: 'flex-start',
          gap: '4rem',
          paddingBottom: '3rem',
        }}
      >
        {children}
      </Container>
    </Box>
  )
}

export default Layout
