import { Box } from '@mui/material'

import QuestionCard from './question-card'

const QuestionsContainer = ({ questions }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {questions.map((question) => (
        <QuestionCard key={question._id} question={question} />
      ))}
    </Box>
  )
}

export default QuestionsContainer
