import { Box } from '@mui/material'

import AnswerItem from '@components/answer-item'

const AnswersList = ({ answers, setQuestionData }) => {
  return (
    <Box>
      {answers.map((answer) => (
        <AnswerItem
          key={answer._id}
          answer={answer}
          setQuestionData={setQuestionData}
        />
      ))}
    </Box>
  )
}

export default AnswersList
