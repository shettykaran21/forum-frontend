import Head from 'next/head'

import Layout from '@components/layout'
import api from 'utils/api'

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

  return (
    <Layout>
      <Head>{title}</Head>
    </Layout>
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
