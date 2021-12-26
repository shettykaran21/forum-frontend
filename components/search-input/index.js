import { InputAdornment, TextField } from '@mui/material'
import { FaSearch } from 'react-icons/fa'

const SearchInput = ({ handleChange, value }) => {
  return (
    <TextField
      sx={{ margin: '1rem 0' }}
      size="small"
      type="text"
      autoComplete="off"
      onChange={handleChange}
      value={value}
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <FaSearch />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default SearchInput
