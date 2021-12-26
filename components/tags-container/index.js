import { Box } from '@mui/material'

const TagsContainer = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
      {children}
    </Box>
  )
}

export default TagsContainer
