import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Layout from '@components/layout'
import Main from '@components/layout/main'
import api from '@utils/api'
import PopularTags from '@components/popular-tags'

const HomePage = ({ questions }) => {
  const [questionsList, setQuestionsList] = useState(questions)

  const router = useRouter()

  useEffect(() => {
    const fetchQuestionByTag = async () => {
      const { data } = await api.get(`/questions`, {
        params: {
          tag: router.query.tag,
        },
      })
      setQuestionsList(data.data)
    }

    if (router.query.tag) {
      fetchQuestionByTag()
    }
  }, [router.query.tag])

  return (
    <>
      <Head>
        <title>
          Forum |{' '}
          {router.query.tag
            ? `Questions tagged ${router.query.tag}`
            : 'All Questions'}
        </title>
      </Head>
      <Layout>
        <Main questions={questionsList} />
        <PopularTags />
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
