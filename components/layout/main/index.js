/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { Box, Link } from '@mui/material'
import { useRouter } from 'next/router'

import QuestionsContainer from '@components/question/questions-container'
import Button from '@components/button'
import PageTitle from '@components/page-title'

const Main = ({ questions }) => {
  const styles = {
    main: css`
      flex: 0 0 70%;
      padding: 2rem 1rem;
    `,
  }

  const router = useRouter()

  return (
    <Box component="main" sx={styles.main}>
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
      <QuestionsContainer questions={questions} />
    </Box>
  )
}

export default Main
