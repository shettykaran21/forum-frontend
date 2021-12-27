import { Box, Divider, Typography } from '@mui/material'

import { formatDate } from '@utils/index'

const CommentItem = ({ comment, count }) => {
  const { body, created } = comment

  const formattedDate = formatDate(created)

  return (
    <Box>
      <Divider />
      <Box sx={{ padding: '0.5rem 0' }}>
        <Typography sx={{ fontSize: '.75rem' }}>{body}</Typography>
        <Box sx={{ display: 'flex' }}>
          <Typography
            sx={{
              color: '#777',
              fontSize: '.625rem',
              marginLeft: 'auto',
            }}
          >
            {formattedDate}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default CommentItem
