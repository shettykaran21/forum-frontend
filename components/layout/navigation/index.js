/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { FaHome, FaTags, FaUserFriends } from 'react-icons/fa'

import NavItem from './nav-item'

const Navigation = () => {
  const styles = {
    nav: css`
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    `,
  }

  return (
    <nav css={styles.nav}>
      <NavItem href="/">
        <FaHome />
        <span>Home</span>
      </NavItem>
      <NavItem href="/tags">
        <FaTags />
        <span>Tags</span>
      </NavItem>
      <NavItem href="/users">
        <FaUserFriends />
        <span>Users</span>
      </NavItem>
    </nav>
  )
}

export default Navigation
