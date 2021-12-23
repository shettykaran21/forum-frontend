import { Drawer, Toolbar, Box } from '@mui/material'

import Navigation from '@components/layout/navigation'
import Link from '@components/link'
import Logo from '@components/logo'

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
        <Logo center />
      </Toolbar>
      <Navigation />
    </Drawer>
  )
}

export default Sidebar
