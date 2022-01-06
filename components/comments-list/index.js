import { Box } from '@mui/material'
import { useState } from 'react'

import CommentItem from '@components/comment-item'

const CommentsList = ({ comments }) => {
  const [showAddComment, setShowAddComment] = useState(false)

  return (
    <Box sx={{ padding: '1rem 0' }}>
      {comments.map((comment) => (
        <CommentItem key={comment._id} comment={comment} />
      ))}
      <Box>Add Comment...</Box>
    </Box>
  )
}

export default CommentsList
