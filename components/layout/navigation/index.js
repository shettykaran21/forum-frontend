/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
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
