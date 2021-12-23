import Image from 'next/image'
import { Box, Link } from '@mui/material'

const Logo = ({ center }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: center && 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        transform: 'translateY(3px)',
      }}
    >
      <Link href="/">
        <Image
          src="/logo-with-text.svg"
          alt="logo"
          layout="fixed"
          height={45}
          width={100}
        />
      </Link>
    </Box>
  )
}

export default Logo
