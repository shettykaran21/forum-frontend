import { Typography } from '@mui/material'

const FormInput = ({
  label,
  name,
  inputInfo,
  hasError = false,
  errorMsg,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...props} />
      {hasError && <Typography>{errorMsg}</Typography>}
    </div>
  )
}

export default FormInput
