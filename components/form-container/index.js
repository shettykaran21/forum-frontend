/** @jsxImportSource @emotion/react */

import { Box } from '@mui/material'
import { css } from '@emotion/react'

const FormContainer = ({ children }) => {
  const styles = {
    container: css`
      position: absolute;
      top: 50%;
      left: 50%;
      width: 25rem;
      padding: 2.5rem;
      transform: translate(-50%, -50%);
      box-shadow: 0 10px 20px 0 rgba(153, 153, 153, 0.25);
      border-radius: 10px;
    `,
  }

  return <Box sx={styles.container}>{children}</Box>
}

export default FormContainer
