import Head from 'next/head'
import { Box } from '@mui/material'

import Layout from '@components/layout'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Forum</title>
      </Head>
      <Layout>
        <Box
          component="main"
          sx={{ border: '1px solid red', flexBasis: '60%' }}
        >
          Content 1
        </Box>
        <Box sx={{ border: '1px solid blue', flexBasis: '40%' }}>Content 2</Box>
      </Layout>
    </>
  )
}

export default HomePage
