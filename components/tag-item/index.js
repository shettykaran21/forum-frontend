import { Box, Typography } from '@mui/material'

import Tag from '@components/tag'

const TagItem = ({ tagData }) => {
  const { _id, count } = tagData

  return (
    <Box
      sx={{
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
        padding: '.5rem 1rem',
        borderRadius: '5px',
      }}
    >
      <Tag>{_id}</Tag>
      <Typography
        sx={{ fontSize: '.875rem', color: '#999', marginTop: '.5rem' }}
      >
        {count}&nbsp; {count > 1 ? 'questions' : 'question'}
      </Typography>
    </Box>
  )
}

export default TagItem
