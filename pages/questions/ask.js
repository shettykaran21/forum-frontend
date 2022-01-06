import Head from 'next/head'

import QuestionForm from '@components/question-form'

const QuestionAskPage = () => {
  return (
    <>
      <Head>
        <title>Forum | Ask a Question</title>
      </Head>
      <QuestionForm />
    </>
  )
}

export default QuestionAskPage
