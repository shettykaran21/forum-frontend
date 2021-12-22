import Image from 'next/image'
import { Drawer, Toolbar, Box } from '@mui/material'

import Navigation from '@components/layout/navigation'
import Link from '@components/link'

const drawerWidth = 240

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          border: 'none',
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            transform: 'translateY(3px)',
          }}
        >
          <Link href="/">
            <Image
              src="/logo-with-text.svg"
              alt="logo"
              layout="fixed"
              height={45}
              width={100}
            />
          </Link>
        </Box>
      </Toolbar>
      <Navigation />
    </Drawer>
  )
}

export default Sidebar
