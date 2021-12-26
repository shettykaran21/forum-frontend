import { Box, Divider, Typography } from '@mui/material'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

import { formatDate } from '@utils/index'

const Comment = ({ comment }) => {
  const { body, created, score, votes } = comment

  const formattedDate = formatDate(created)

  return (
    <Box>
      <Box sx={{ padding: '0.5rem 0' }}>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <FaCaretUp
              fontSize="1rem"
              style={{
                cursor: 'pointer',
              }}
              onClick={() => handleVote(1)}
            />
            <Typography sx={{ fontSize: '0.75rem' }}>{score}</Typography>
            <FaCaretDown
              fontSize="1rem"
              style={{
                cursor: 'pointer',
              }}
              onClick={() => handleVote(-1)}
            />
          </Box>
          <Typography sx={{ fontSize: '.75rem' }}>{body}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            sx={{
              color: '#777',
              fontSize: '.625rem',
              alignSelf: 'flex-end',
            }}
          >
            {formattedDate}
          </Typography>
        </Box>
      </Box>
      <Divider />
    </Box>
  )
}

export default Comment
