import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

const FormTagInput = ({
  label,
  name,
  inputInfo,
  hasError = false,
  errorMsg,
  variant = 'standard',
  ...props
}) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        label={label}
        id={name}
        error={hasError ? true : false}
        {...props}
        sx={{ padding: '.5rem .25rem' }}
        startAdornment={
          <TagsInput className="react-tagsinput" onlyUnique {...props} />
        }
      />
      {hasError && (
        <FormHelperText sx={{ color: 'red' }}>{errorMsg}</FormHelperText>
      )}
      <FormHelperText>{inputInfo}</FormHelperText>
    </FormControl>
  )
}

export default FormTagInput
