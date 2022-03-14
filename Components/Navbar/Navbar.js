import { AppBar, Avatar, Box, Button, Container, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu"
import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'

const newPages =[
  {
    navItem:'Home',
    link:'/'
  },
  {
    navItem:'About',
    link:'/about'
  },
  {
    navItem:'Frelancers',
    link:'/freelancer'
  },
  {
    navItem:'Gallery',
    link:'/gallery'
  },{
    navItem:'Blogs',
    link:'/blogs'
  },
  {
    navItem:'Contact',
    link:'/contact'
  },
]
const newSettings = [
  {
    navItem:'Profile',
    link:'/profile'
  },
  {
    navItem:'Account',
    link:'/account'
  },
  {
    navItem:'Dashboard',
    link:'/dash'
  },
]
const pages = ['Home', 'About', 'Frelancers','Gallery','Blogs','Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = ({children}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isLoggedin = true;

  return (
    <>
    <AppBar position="static" className={styles.navbar}>
      <Container maxWidth="xl" sx={{py:2, borderBottom: 1}}>
        <Toolbar sx={{px:5}} disableGutters>
          <Typography
            variant="h3"
            noWrap
            component="div"
            className= {styles.logo}
            sx={{ mr: 2, display: { xs: 'none', md: 'flex'} }}
          >
            PhotoManea
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {newPages.map((page) => (
                <MenuItem key={page.link} onClick={handleCloseNavMenu}>
                  <Link href={page.link}>
                  <Typography textAlign="center">{page.navItem}</Typography>
                  </Link>
                  
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            PhotoManea
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center', alignItems: 'center' } }}>
          <Typography align="center">
            <List>
              <ListItem sx={{pt:2}}>
                <Link  href="/">
                  <ListItemText>
                    <Button className={styles.navLink} sx={{fontSize: 17,color:'white'}}>
                       Home
                    </Button>
                  </ListItemText>
                </Link>
                <Link href="/about">
                  <ListItemText>
                    <Button className={styles.navLink} sx={{fontSize: 17,color:'white'}}>
                       About
                    </Button>
                  </ListItemText>
                </Link>
                <Link href="/">
                  <ListItemText>
                    <Button className={styles.navLink} sx={{fontSize: 17,color:'white'}}>
                       Frelancers
                    </Button>
                  </ListItemText>
                </Link>
                <Link href="/gallery">
                  <ListItemText>
                    <Button className={styles.navLink} sx={{fontSize: 17,color:'white'}}>
                       Gallery
                    </Button>
                  </ListItemText>
                </Link>
                <Link href="/">
                  <ListItemText>
                    <Button className={styles.navLink} sx={{fontSize: 17,color:'white'}}>
                       Blogs
                    </Button>
                  </ListItemText>
                </Link>
                <Link href="/">
                  <ListItemText>
                    <Button className={styles.navLink} sx={{fontSize: 17,color:'white'}}>
                       Contact
                    </Button>
                  </ListItemText>
                </Link>
              </ListItem>
            </List>
          </Typography>
          </Box>
          {
            !isLoggedin?
            <Link style={{flexGrow: 0 }} href="/login">
                  <ListItemText>
                    <Button className={styles.navLink} sx={{fontSize: 17,color:'white'}}>
                       Login
                    </Button>
                  </ListItemText>
            </Link>
            :
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
  
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {newSettings.map((setting) => (
                <MenuItem key={setting.link} onClick={handleCloseUserMenu}>
                  <Link href={setting.link}>
                  <Typography textAlign="center">{setting.navItem}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          }
          
        </Toolbar>
      </Container>
    </AppBar>
    {children}
    </>
  );
};
export default Navbar;