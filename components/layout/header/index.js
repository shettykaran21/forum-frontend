/** @jsxImportSource @emotion/react */

import { useContext, useState } from 'react'
import { css } from '@emotion/react'
import { AppBar, Box, Toolbar } from '@mui/material'
import { styled } from '@mui/system'

import Button from '@components/button'
import Link from '@components/link'
import { AuthContext } from '@context/auth'
import CustomAlert from '@components/alert'
import Logo from '@components/logo'

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

const Header = () => {
  const styles = {
    header: css`
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 15px 0px;
      background-color: #fff;
      color: #000;
    `,
  }

  const { authState, isAuthenticated, logout } = useContext(AuthContext)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <CustomAlert
        title={'Logged out successfully'}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <AppBar position="fixed" sx={styles.header}>
        <Toolbar sx={{ padding: '0 8rem' }} disableGutters>
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <Logo />
            <>
              {isAuthenticated() ? (
                <Box
                  sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
                >
                  <Link href={`/users/${authState.userInfo.username}`}>
                    {authState.userInfo.username}
                  </Link>
                  <Button
                    onClick={async () => {
                      await logout()
                      setIsOpen(true)
                    }}
                  >
                    Logout
                  </Button>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: 'flex',
                    gap: '1rem',
                  }}
                >
                  <Button>
                    <Link href={'/login'} style={{ color: 'inherit' }}>
                      Login
                    </Link>
                  </Button>
                  <Button>
                    <Link href={'/signup'} style={{ color: 'inherit' }}>
                      Sign Up
                    </Link>
                  </Button>
                </Box>
              )}
            </>
          </Box>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  )
}

export default Header
