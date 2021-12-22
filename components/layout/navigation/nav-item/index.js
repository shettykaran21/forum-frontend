/** @jsxImportSource @emotion/react */

/** @jsxImportSource @emotion/react */

import { useRouter } from 'next/router'
import { css, ClassNames } from '@emotion/react'
import { useTheme, lighten } from '@mui/material/styles'

import Link from 'next/link'

const NavItem = ({ href, children, selected, ...props }) => {
  const theme = useTheme()

  const styles = {
    link: css`
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.5rem 0;
      padding-left: 2rem;
      cursor: pointer;
    `,
    active: css`
      color: ${theme.palette.primary.main};
      background-color: ${lighten(theme.palette.primary.main, 0.9)};
      position: relative;

      &::before {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        width: 5px;
        height: 100%;
        background-color: ${theme.palette.primary.main};
      }
    `,
  }

  const router = useRouter()

  return (
    <ClassNames>
      {({ css, cx }) => (
        <Link href={href}>
          <a
            {...props}
            css={cx(
              css(styles.link),
              router.pathname === href && css(styles.active)
            )}
          >
            {children}
          </a>
        </Link>
      )}
    </ClassNames>
  )
}

export default NavItem
