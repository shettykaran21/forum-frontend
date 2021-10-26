/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { AppBar, Box, Toolbar } from '@mui/material'
import { styled } from '@mui/system'

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

const Header = () => {
  const styles = {
    header: css`
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      background-color: #fff;
      color: #000;
    `,
  }

  return (
    <>
      <AppBar position="fixed" sx={styles.header}>
        <Toolbar>
          <Box>Forum</Box>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  )
}

export default Header
