import { AppBar, Drawer, Toolbar, Typography } from '@mui/material'

import Navigation from '@components/layout/navigation'
import { Box } from '@mui/system'

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
          }}
        >
          Forum
        </Box>
      </Toolbar>
      <Navigation />
    </Drawer>
  )
}

export default Sidebar
