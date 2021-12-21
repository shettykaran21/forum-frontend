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

  return <Layout>This is a single question page</Layout>
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params

  const { data } = await api.get(`/questions/question/${slug}`)

  return {
    props: {
      question: data.data,
    },
  }
}

export const getStaticPaths = () => {
  return {
    paths: [{ params: { slug: '619d12f66e2e1839a1bd662f' } }],
    fallback: false,
  }
}

export default SingleQuestionPage
