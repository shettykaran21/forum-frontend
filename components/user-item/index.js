import { Box, Typography } from '@mui/material'

import Link from '@components/link'

const UserItem = ({ userData }) => {
  const { username, created } = userData

  const formattedDate = new Date(created)
    .toLocaleDateString('en-IN', {
      month: 'short',
      day: 'numeric',
    })
    .replace(',', ' at')

  return (
    <Box
      sx={{
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
        padding: '1rem',
        borderRadius: '10px',
      }}
    >
      <Link href={`/users/${username}`} style={{ textDecoration: 'none' }}>
        <Typography>{username}</Typography>
      </Link>
      <Typography
        sx={{ fontSize: '.875rem', color: '#999', marginTop: '.5rem' }}
      >
        created {formattedDate}
      </Typography>
    </Box>
  )
}

export default UserItem
