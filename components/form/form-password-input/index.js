/** @jsxImportSource @emotion/react */

import { useState } from 'react'
import { css } from '@emotion/react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const FormPasswordInput = ({
  label,
  name,
  hasError = false,
  errorMsg,
  ...props
}) => {
  const styles = {
    icon: css`
      font-size: 1.25rem;
    `,
  }

  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = (prev) => {
    setIsVisible(!prev)
  }

  return (
    <TextField
      id={name}
      label={label}
      variant="standard"
      fullWidth
      type={isVisible ? 'text' : 'password'}
      error={hasError ? true : false}
      helperText={hasError && errorMsg}
      margin="normal"
      {...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => toggleVisibility(isVisible)}>
              {isVisible ? (
                <FaEye css={styles.icon} />
              ) : (
                <FaEyeSlash css={styles.icon} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default FormPasswordInput
