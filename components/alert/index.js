import { Alert, AlertTitle, Grow } from '@mui/material'
import { useEffect } from 'react'
import { MdClose } from 'react-icons/md'

const CustomAlert = ({ isOpen, setIsOpen, title, alertMsg }) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      setIsOpen(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [isOpen, setIsOpen])

  return (
    <Grow in={isOpen}>
      <Alert
        severity="success"
        action={
          <MdClose
            style={{ cursor: 'pointer' }}
            onClick={() => setIsOpen(false)}
          />
        }
        sx={{ position: 'absolute', bottom: '2rem', right: '2rem' }}
      >
        <AlertTitle>{title}</AlertTitle>
        {alertMsg}
      </Alert>
    </Grow>
  )
}

export default CustomAlert
