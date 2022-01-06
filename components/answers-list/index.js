import { Box } from '@mui/material'

import AnswerItem from '@components/answer-item'

const AnswersList = ({ question, setQuestionData }) => {
  return (
    <Box>
      {question.answers.map((answer) => (
        <AnswerItem
          key={answer._id}
          answer={answer}
          setQuestionData={setQuestionData}
          questionId={question._id}
        />
      ))}
    </Box>
  )
}

export default AnswersList
