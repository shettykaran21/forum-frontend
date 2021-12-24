import { createContext, useState, useEffect } from 'react'

import api from '@utils/api'

const TagContext = createContext()

const TagProvider = ({ children }) => {
  const [popularTags, setPopularTags] = useState(null)

  useEffect(() => {
    const fetchPopularTags = async () => {
      const { data } = await api.get('/tags/popular-tags')
      setPopularTags(data.data)
      console.log(data)
    }

    fetchPopularTags()
  }, [])

  return (
    <TagContext.Provider value={{ popularTags }}>
      {children}
    </TagContext.Provider>
  )
}

export { TagContext, TagProvider }
