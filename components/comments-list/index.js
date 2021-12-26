import { Box } from '@mui/material'

import Comment from '@components/comment'

const CommentsList = ({ comments }) => {
  return (
    <Box sx={{ padding: '1rem 0' }}>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Box>
  )
}

export default CommentsList
