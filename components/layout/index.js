import { Container, Box } from '@mui/material'

import Sidebar from '@components/layout/sidebar'

const Layout = ({ children, ...props }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Container maxWidth="lg" {...props}>
        {children}
      </Container>
    </Box>
  )
}

export default Layout
