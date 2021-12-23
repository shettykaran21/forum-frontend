import { useState, useEffect } from 'react'

const useStickyState = (defaultValue, key) => {
  const [value, setValue] = useState(null)

  useEffect(() => {
    const stickyValue = sessionStorage.getItem(key)
    setValue(stickyValue !== null ? JSON.parse(stickyValue) : defaultValue)
  }, [defaultValue, key])

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useStickyState
