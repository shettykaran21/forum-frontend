import { Box } from '@mui/material'

const UsersList = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {children}
    </Box>
  )
}

export default UsersList
