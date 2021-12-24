/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import Link from '@components/link'
import { Box, useTheme } from '@mui/material'
import { lighten } from '@mui/system'

const Tag = ({ count, children }) => {
  const theme = useTheme()

  const styles = {
    tag: css`
      display: inline-block;
      background-color: ${theme.palette.primary.main};
      color: #fff;
      font-size: 0.75rem;
      padding: 6px 10px;
      border: 1px solid transparent;
      margin: 2px 5px 2px 0;
      line-height: 1;
      white-space: nowrap;
      border-radius: 3px;
      transition: all ease 0.3s;

      &:active {
        color: ${theme.palette.primary.main};
      }

      &:hover {
        background-color: ${lighten(theme.palette.primary.main, 0.2)};
        border-color: transparent;
      }
    `,
    count: css`
      color: #eee;
    `,
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
      <Link href={{ pathname: '/', query: { tag: children } }} sx={styles.tag}>
        {children}
        {count && (
          <>
            &nbsp;&nbsp; x&nbsp;<Box component="span">{count}</Box>
          </>
        )}
      </Link>
    </Box>
  )
}

export default Tag
