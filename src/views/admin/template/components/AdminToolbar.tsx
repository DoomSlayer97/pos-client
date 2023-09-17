import { 
  Divider, 
  Drawer as MuiDrawer, 
  IconButton, 
  List, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  ListSubheader,
  Toolbar, 
  styled, 
  Link} from "@mui/material"
import { 
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon, 
  ShoppingCart as ShoppingCartIcon,
  People as PeopleIcon,
  BarChart as BarChartIcon,
  Layers as LayersIcon,
  Assignment as AssignmentIcon, 
} from '@mui/icons-material'
import React from "react";
import { useAdminTemplate } from "../useAdminTemplate";
import { drawerWidth } from "./";


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

interface IListItemProps {
  label: string;
  href: string;
  onClick: () => void;
}

const ListItem = ({ label, href, onClick }: IListItemProps) => {
  
  return (
    <ListItemButton LinkComponent={'a'} href={href}  >
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )

}

const MainListItems = () => {

  const { menuItems, redirectRoute } = useAdminTemplate();

  return (
    <>
      { menuItems.map((item, index) => <ListItem 
          key={index}
          href={item.href}  
          label={item.label} 
          onClick={() => redirectRoute(item.href)}/>
        ) 
      }
    </>
  )

}


export const AdminToolbar = () => {

  const { openDrawer, switchDrawer } = useAdminTemplate();

  return (
    <Drawer variant="permanent" open={openDrawer}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={switchDrawer} >
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <MainListItems />
        <Divider sx={{ my: 1 }} />
      </List>
    </Drawer>
  )

}