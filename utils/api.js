import axios from 'axios'

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : `https://${process.env.WEBSITE_NAME}`

const api = axios.create({
  baseURL,
})

export default api
