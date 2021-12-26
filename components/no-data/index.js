import Image from 'next/image'
import { Box, Typography } from '@mui/material'

const NoData = ({ text }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 6rem)',
      }}
    >
      <Image src="/no-data.svg" height={400} width={300} alt="No Data Found" />
      <Typography sx={{ color: '#888', fontSize: '1.125rem' }}>
        {text}
      </Typography>
    </Box>
  )
}

export default NoData
