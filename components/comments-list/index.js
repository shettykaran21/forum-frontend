import { Box } from '@mui/material'
import { useState } from 'react'

import CommentItem from '@components/comment-item'
import CommentForm from '@components/form/comment-form'

const CommentsList = ({ comments, setQuestionData, questionId, answerId }) => {
  const [showAddComment, setShowAddComment] = useState(true)

  return (
    <Box sx={{ padding: '1rem 0' }}>
      {comments.map((comment) => (
        <CommentItem key={comment._id} comment={comment} />
      ))}
      {showAddComment && (
        <CommentForm
          setQuestionData={setQuestionData}
          questionId={questionId}
          answerId={answerId}
          setShowAddComment={setShowAddComment}
        />
      )}
    </Box>
  )
}

export default CommentsList
