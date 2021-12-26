import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Typography } from '@mui/material'

import api from '@utils/api'
import Layout from '@components/layout'
import Loader from '@components/loader'
import QuestionsContainer from '@components/question/questions-container'
import NoData from '@components/no-data'

const SingleUserPage = () => {
  const [userQuestions, setUserQuestions] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    const getUserQuestions = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const { data } = await api.get(`/questions/user/${slug}`)
        setUserQuestions(data.data)
      } catch (err) {
        setError(err.response.data.message)
      }
      setIsLoading(false)
    }

    if (slug) {
      getUserQuestions()
    }
  }, [slug])

  return (
    <Layout sx={{ padding: '1rem 0' }}>
      {isLoading && <Loader />}
      {!isLoading && error && <Typography>{error}</Typography>}
      {!isLoading && !error && userQuestions.length === 0 && (
        <NoData text="No questions asked by user" />
      )}
      {!isLoading && !error && userQuestions.length > 0 && (
        <QuestionsContainer questions={userQuestions} />
      )}
    </Layout>
  )
}

export default SingleUserPage
