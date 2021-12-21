/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import Link from '@components/link'
import { Box, useTheme } from '@mui/material'
import { lighten } from '@mui/system'

const Tag = ({ children }) => {
  const theme = useTheme()

  const styles = {
    tag: css`
      display: inline-block;
      background-color: ${theme.palette.primary.main};
      color: #fff;
      font-size: 12px;
      padding: 5px 6px;
      border: 1px solid transparent;
      margin: 2px 5px 2px 0;
      line-height: 1;
      white-space: nowrap;
      border-radius: 3px;

      &:active {
        color: ${theme.palette.primary.main};
      }

      &:hover {
        background-color: ${lighten(theme.palette.primary.main, 0.2)};
        border-color: transparent;
      }
    `,
  }

  return (
    <Box>
      <Link
        href={{ pathname: '/', query: { tag: children } }}
        style={styles.tag}
      >
        {children}
      </Link>
    </Box>
  )
}

export default Tag
