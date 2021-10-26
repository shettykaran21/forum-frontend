import styled from '@emotion/styled'
import { useTheme } from '@mui/material'

const StyledButton = styled.button`
  background-color: ${({ color }) => color};
  color: #fff;
  text-transform: none;
  border-radius: 5px;
  padding: 0.75rem 1.25rem;
  border: none;
  cursor: pointer;
  font-family: inherit;
`

const Button = ({ children, ...other }) => {
  const theme = useTheme()

  return (
    <StyledButton color={theme.palette.primary.main} {...other}>
      {children}
    </StyledButton>
  )
}

export default Button
