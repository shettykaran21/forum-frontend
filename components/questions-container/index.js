import { Box } from '@mui/material'

const QuestionsContainer = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
      {children}
    </Box>
  )
}

export default QuestionsContainer
