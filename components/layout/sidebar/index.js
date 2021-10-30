import { Drawer, Toolbar, Box } from '@mui/material'

import Navigation from '@components/layout/navigation'

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
