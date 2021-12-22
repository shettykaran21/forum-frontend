/** @jsxImportSource @emotion/react */

import { useState } from 'react'
import { css } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import { lighten } from '@mui/material/styles'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const FormPasswordInput = ({
  label,
  name,
  inputInfo,
  hasError = false,
  errorMsg,
  ...props
}) => {
  const styles = {
    container: css`
      display: flex;
      flex-direction: column;
      position: relative;
      padding-top: 1.5rem;
    `,
    label: css`
      display: block;
      color: #555;
    `,
    input: css`
      border: 0;
      z-index: 1;
      background-color: transparent;
      border-bottom: 2px solid #eee;
      font: inherit;
      font-size: 1rem;
      padding: 0.25rem 0;
      flex: 1;

      &:focus {
        outline: 0;
        border-bottom-color: #6658d3;
      }
    `,
    error: css`
      color: ${lighten('#ff0000', 0.5)};
      font-size: 0.875rem;
      margin-top: 0.5rem;
    `,
    icon: css`
      color: #333;
      cursor: pointer;
      position: absolute;
      right: 0;
      z-index: 1;
    `,
  }

  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = (prev) => {
    setIsVisible(!prev)
  }

  return (
    <Box sx={styles.container}>
      <label htmlFor={name} css={styles.label}>
        {label}
      </label>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <input
          id={name}
          css={styles.input}
          {...props}
          type={isVisible ? 'text' : 'password'}
        />
        {!isVisible ? (
          <FaEye
            css={styles.icon}
            onClick={() => toggleVisibility(isVisible)}
          />
        ) : (
          <FaEyeSlash
            css={styles.icon}
            onClick={() => toggleVisibility(isVisible)}
          />
        )}
      </Box>
      {hasError && <Typography sx={styles.error}>{errorMsg}</Typography>}
    </Box>
  )
}

export default FormPasswordInput
