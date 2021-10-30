/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { Box } from '@mui/material'

import QuestionsContainer from '@components/question/questions-container'

const Main = ({ questions }) => {
  const styles = {
    main: css`
      flex-basis: 65%;
      max-height: 100vh;
      padding: 1rem;
      overflow: auto;
      ::-webkit-scrollbar {
        display: none;
      }
    `,
  }

  return (
    <Box component="main" sx={styles.main}>
      <QuestionsContainer questions={questions} />
    </Box>
  )
}

export default Main
