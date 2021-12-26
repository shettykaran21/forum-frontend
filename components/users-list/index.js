import { Box } from '@mui/material'

const UsersList = ({ children }) => {
  return (
    <Box
      sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '1rem 0' }}
    >
      {children}
    </Box>
  )
}

export default UsersList
