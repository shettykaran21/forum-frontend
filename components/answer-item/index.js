import { Box, Divider, Typography } from '@mui/material'

import CommentsList from '@components/comments-list'
import UpvoteDownvoteAnswer from '@components/upvote-downvote-answer'
import { formatDate } from '@utils/index'

const AnswerItem = ({ answer, setQuestionData, questionId }) => {
  const { comments, created, text, _id } = answer

  const formattedDate = formatDate(created)

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <UpvoteDownvoteAnswer data={answer} setData={setQuestionData} />
        <Box sx={{ flexGrow: 1 }}>
          <Typography sx={{ margin: '1rem 0' }}>{text}</Typography>
          <Box sx={{ display: 'flex' }}>
            <Typography
              variant="body2"
              sx={{ color: '#777', fontSize: '.875rem', marginLeft: 'auto' }}
            >
              {formattedDate}
            </Typography>
          </Box>
          <CommentsList
            comments={comments}
            setQuestionData={setQuestionData}
            questionId={questionId}
            answerId={_id}
          />
        </Box>
      </Box>
      <Divider />
    </Box>
  )
}

export default AnswerItem
