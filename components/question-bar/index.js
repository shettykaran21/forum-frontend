import { useRouter } from 'next/router'
import { Box } from '@mui/material'

import PageTitle from '@components/page-title'
import Button from '@components/button'
import Link from '@components/link'

const QuestionBar = () => {
  const router = useRouter()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '1rem',
      }}
    >
      <PageTitle
        title={
          router.query.tag
            ? `Questions tagged [${router.query.tag}]`
            : 'All Questions'
        }
      />
      <Button>
        <Link href={'/questions/ask'} style={{ color: 'inherit' }}>
          Ask Question
        </Link>
      </Button>
    </Box>
  )
}

export default QuestionBar
