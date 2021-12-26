import Head from 'next/head'

import api from '@utils/api'
import Layout from '@components/layout'
import PopularTags from '@components/popular-tags'
import Main from '@components/layout/main'
import QuestionDetails from '@components/question-details'

const SingleQuestionPage = ({ question }) => {
  const { title } = question

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
        <Main>
          <QuestionDetails question={question} />
        </Main>
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
