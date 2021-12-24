/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { Box } from '@mui/material'

import QuestionsContainer from '@components/question/questions-container'

const Main = ({ questions }) => {
  const styles = {
    main: css`
      flex: 0 0 70%;
      padding: 2rem 1rem;
    `,
  }

  return (
    <Box component="main" sx={styles.main}>
      <QuestionsContainer questions={questions} />
    </Box>
  )
}

export default Main
