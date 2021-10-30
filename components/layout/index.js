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
          padding: '3rem 0',
        }}
      >
        {children}
      </Container>
    </Box>
  )
}

export default Layout
