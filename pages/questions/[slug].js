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

  console.log(question)

  return <Layout>This is a single question page</Layout>
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
