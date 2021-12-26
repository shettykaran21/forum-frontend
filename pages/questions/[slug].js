import Head from 'next/head'

import api from '@utils/api'
import Layout from '@components/layout'
import PopularTags from '@components/popular-tags'
import { Box } from '@mui/material'

const SingleQuestionPage = ({ question }) => {
  const {
    answers,
    author,
    comments,
    created,
    score,
    tags,
    text,
    title,
    views,
    votes,
    _id,
  } = question

  console.log(question)

  return (
    <>
      <Head>
        <title>Forum | {title}</title>
      </Head>
      <Layout
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '4rem',
          paddingBottom: '3rem',
        }}
      >
        <Box component="main" sx={{ flex: '0 0 70%', padding: '1rem 0' }}>
          Hello World
        </Box>
        <PopularTags />
      </Layout>
    </>
  )
}

export const getServerSideProps = async ({ params }) => {
  const { slug } = params

  const { data } = await api.get(`/questions/question/${slug}`)

  return {
    props: {
      question: data.data,
    },
  }
}

export default SingleQuestionPage
