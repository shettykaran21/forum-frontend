import Head from 'next/head'

import Sidebar from '@components/layout/sidebar'
import { Container, Box, Typography } from '@mui/material'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Forum</title>
      </Head>
      <Container
        fixed
        maxWidth="xl"
        sx={{
          display: 'flex',
          marginTop: '2rem',
        }}
      >
        <Sidebar />
        <Box component="main" sx={{ border: '1px solid red' }}>
          Content 1
        </Box>
        <Box sx={{ border: '1px solid blue' }}>Content 2</Box>
      </Container>
    </>
  )
}

export default HomePage
