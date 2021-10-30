/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

import Link from 'next/link'

const NavItem = ({ href, children, selected, ...props }) => {
  const styles = {
    link: css`
      display: flex;
      align-items: center;
      gap: 1rem;
      padding-left: 2rem;
      cursor: pointer;
    `,
  }

  return (
    <Link href={href}>
      <a {...props} css={styles.link}>
        {children}
      </a>
    </Link>
  )
}

export default NavItem
