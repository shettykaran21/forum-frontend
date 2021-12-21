import Layout from '@components/layout'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'

import api from 'utils/api'
import QuestionsContainer from '@components/question/questions-container'

const SingleUserPage = () => {
  const [userQuestions, setUserQuestions] = useState(null)

  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    const getUserQuestions = async () => {
      const { data } = await api.get(`/questions/user/${slug}`)
      setUserQuestions(data.data)
    }

    if (slug) {
      getUserQuestions()
    }
  }, [slug])

  return (
    <Layout>
      {!userQuestions && <Typography>Loading...</Typography>}
      {userQuestions && <QuestionsContainer questions={userQuestions} />}
    </Layout>
  )
}

export default SingleUserPage
