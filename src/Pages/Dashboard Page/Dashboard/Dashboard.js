import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import OrderManage from '../OrderManage/OrderManage';
import ProductManage from '../ProductManage/ProductManage';
import AddProduct from '../AddProduct/AddProduct';


const drawerWidth = 240;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let { path, url } = useRouteMatch();
  const linkStyle = {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center'
  };

  const drawer = (
    <div>
      <Typography variant="h6" sx={{ my: 2, mx: "auto", display: 'flex', width: '70%' }}>
        Niche Product
      </Typography>
      {/* <Toolbar /> */}
      <Divider />
      <List>

        <ListItem button >
          <Link to="/home" style={linkStyle}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </Link>
        </ListItem>

        <ListItem button >
          <Link to="/explore" style={linkStyle}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'Explore'} />
          </Link>
        </ListItem>

      </List>
      <Divider />
      <List>

        {/* <ListItem button >
          <Link to="/home" style={linkStyle}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </Link>
        </ListItem> */}

        <ListItem button >
          <Link to={`${url}/my-orders`} style={linkStyle}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'My Orders'} />
          </Link>
        </ListItem>

        <ListItem button >
          <Link to={`${url}/payment`} style={linkStyle}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'Payment'} />
          </Link>
        </ListItem>

        <ListItem button >
          <Link to={`${url}/review`} style={linkStyle}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'Review'} />
          </Link>
        </ListItem>

      </List>
      <Divider />
      <List>

        <ListItem button >
          <Link to={`${url}/add-product`} style={linkStyle}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Add Product" />
          </Link>
        </ListItem>

        <ListItem button >
          <Link to={`${url}/product-manage`} style={linkStyle}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Product Manage" />
          </Link>
        </ListItem>

        <ListItemButton component={Link} to={`${url}/order-manage`}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Order Manage" />
        </ListItemButton>

        <ListItemButton component={Link} to={`${url}/make-admin`}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Make Admin" />
        </ListItemButton>

      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>

          </Route>
          <Route path={`${path}/my-orders`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/payment`}>
            <Payment />
          </Route>
          <Route path={`${path}/review`}>
            <Review />
          </Route>

          <Route path={`${path}/add-product`}>
            <AddProduct />
          </Route>
          <Route path={`${path}/product-manage`}>
            <ProductManage />
          </Route>
          <Route path={`${path}/order-manage`}>
            <OrderManage />
          </Route>
          <Route path={`${path}/make-admin`}>
            <MakeAdmin />
          </Route>

        </Switch>

      </Box>
    </Box>
  );
};

export default Dashboard;