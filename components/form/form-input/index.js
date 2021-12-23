import { TextField } from '@mui/material'

const FormInput = ({ label, name, hasError = false, errorMsg, ...props }) => {
  return (
    <TextField
      id={name}
      label={label}
      variant="standard"
      fullWidth
      error={hasError ? true : false}
      helperText={hasError && errorMsg}
      margin="normal"
      {...props}
    />
  )
}

export default FormInput
