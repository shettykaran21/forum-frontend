import Head from 'next/head'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'

import '@styles/globals.css'
import theme from '@styles/theme'
import createEmotionCache from '@styles/createEmotionCache'
import Header from '@components/layout/header'
import { AuthProvider } from '@context/auth'
import { setAuthHeader } from '@utils/api'

const clientSideEmotionCache = createEmotionCache()

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthHeader(localStorage.token)
    }
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Forum</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </CacheProvider>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}
