import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from "../../assets/logo1.png";
import { Link, useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemText, Popover } from '@mui/material';

const pages = ['Home', 'Dashboard', 'Services', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Navbar() {
  const history = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElServices, setAnchorElServices] = React.useState(null);

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


  const handleOpenServicesMenu = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleCloseServicesMenu = () => {
    setAnchorElServices(null);
  };

  const handleServiceClick = (service) => {
    handleCloseServicesMenu();
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#5F9EA0', boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }} >
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                keepMounted
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ mr: 2 }}>
              <img
                src={logo}
                alt="Logo"
                sx={{ display: { xs: 'flex', md: 'none' } }}
              />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: "20px" }}>
              <Typography variant='body1'>
                <Link to={"/home"} style={{ textDecoration: 'none', color: 'white' }}>
                  Home
                </Link>
              </Typography>
              <Typography variant='body1'>
                <Link to={"/about"} style={{ textDecoration: 'none', color: 'white' }}>
                 About
                </Link>
              </Typography>
              <Typography variant='body1' onMouseEnter={handleOpenServicesMenu} style={{ color: 'white', cursor: 'pointer' }}>
                Services
              </Typography>
              <Typography variant='body1'>
                <Link to={"/contact"} style={{ textDecoration: 'none', color: 'white' }}>
                  Contact
                </Link>
              </Typography>
              <Popover
                id="services-menu"
                anchorEl={anchorElServices}
                open={Boolean(anchorElServices)}
                onClose={handleCloseServicesMenu}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                sx={{ textAlign: "center" }}
              >
                <List sx={{ width:"400px" }} >
                  <ListItem button onClick={() => handleServiceClick("Web Development")}>
                  
                    <ListItemText primary="Web Development" />
                  </ListItem>
                  <ListItem button onClick={() => handleServiceClick("Web Designing")}>
                    <ListItemText primary="Web Designing" />
                  </ListItem>
                  <ListItem button onClick={() => handleServiceClick("Digital Marketing")}>
                    <ListItemText primary="Digital Marketing" />
                  </ListItem>
                  <ListItem button onClick={() => handleServiceClick("SEO")}>
                    <ListItemText primary="SEO" />
                  </ListItem>
                  
                </List>
              </Popover>
            </Box>

            <Box>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User Avatar" src="/dynamic/path/to/user-avatar.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                id="user-menu"
                anchorEl={anchorElUser}
                keepMounted
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>

      </AppBar>
     
    </>
  );
}

export default Navbar;
