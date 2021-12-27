import { Box } from '@mui/material'

import CommentItem from '@components/comment-item'

const CommentsList = ({ comments }) => {
  return (
    <Box sx={{ padding: '1rem 0' }}>
      {comments.map((comment) => (
        <CommentItem key={comment._id} comment={comment} />
      ))}
    </Box>
  )
}

export default CommentsList
