import Head from 'next/head'
import { Box, Typography } from '@mui/material'

import Layout from '@components/layout'
import Main from '@components/layout/main'
import api from 'utils/api'

const HomePage = ({ questions }) => {
  return (
    <>
      <Head>
        <title>Forum</title>
      </Head>
      <Layout>
        <Main questions={questions} />
        <Box sx={{ flexBasis: '35%', paddingTop: '3rem' }}>
          <Typography variant="body1">Popular Tags</Typography>
        </Box>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const { data } = await api.get('/questions')

  return {
    props: {
      questions: data.data,
    },
  }
}

export default HomePage
