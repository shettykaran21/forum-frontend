import { TextField } from '@mui/material'

const FormTextArea = () => {
  return (
    <TextField
      placeholder="MultiLine with rows: 2 and rowsMax: 4"
      multiline
      rows={2}
      maxRows={4}
    />
  )
}

export default FormTextArea
