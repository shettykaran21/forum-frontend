import { Box } from '@mui/material'

import UserItem from '@components/user-item'

const UsersList = ({ users }) => {
  return (
    <Box
      sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '1rem 0' }}
    >
      {users?.map((user) => (
        <UserItem key={user._id} userData={user} />
      ))}
    </Box>
  )
}

export default UsersList
