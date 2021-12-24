/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import { BiHomeAlt, BiPurchaseTag, BiUser } from 'react-icons/bi'

import NavItem from './nav-item'

const Navigation = () => {
  const styles = {
    nav: css`
      display: flex;
      flex-direction: column;
    `,
  }

  return (
    <nav css={styles.nav}>
      <Typography
        sx={{
          padding: '0.75rem 0',
          paddingLeft: '4rem',
          fontSize: '.75rem',
          letterSpacing: '1px',
        }}
      >
        MENU
      </Typography>
      <NavItem href="/">
        <BiHomeAlt />
        <span>Home</span>
      </NavItem>
      <NavItem href="/tags">
        <BiPurchaseTag />
        <span>Tags</span>
      </NavItem>
      <NavItem href="/users">
        <BiUser />
        <span>Users</span>
      </NavItem>
    </nav>
  )
}

export default Navigation
