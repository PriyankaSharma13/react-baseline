import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/new-logo3.png";
import { Link, useNavigate } from "react-router-dom";
import { List, ListItem, ListItemText, Popover } from "@mui/material";
import styles from "./navbar.module.css";

const pages = ["Home", "Dashboard", "Services","ClientWork" ,"Contact"];
const settings = ["Profile", "Dashboard", "Logout"];

function Navbar() {
  const history = useNavigate();
  const menuRef = React.useRef(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElServices, setAnchorElServices] = React.useState(null);
  const [servicesOpen, setServicesOpen] = React.useState(false);

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
    setServicesOpen(true);
  };

  const handleCloseServicesMenu = () => {
    setAnchorElServices(null);
    setServicesOpen(false);
  };

  const handleServiceClick = (service) => {
    handleCloseServicesMenu();
    if (service === "Web Development") {
      history("/webdevelopment");
    } else if (service === "Web Designing") {
      history("/webdesigning");
    } else if (service === "Digital Marketing") {
      history("/digitalmarketing");
    } else if (service === "SEO") {
      history("/seo");
    }
  };

  const handleLogout = () => {
    history('/login');
  };

  return (
    <>
      <AppBar className={styles.navbar}>
        <Container className={styles.navbarContainer}>
          <Toolbar >
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                className={`${styles.logoImg} ${styles.navLink}`}
              />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: "20px",
              }}
            >
              <Typography variant="body1">
                <Link to="/home" className={styles.navLink}>
                  Home
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link to="/about" className={styles.navLink}>
                  About
                </Link>
              </Typography>
              <Typography
                variant="body1"
                className={styles.navLink}
                onMouseEnter={handleOpenServicesMenu}
                onMouseLeave={(e) => {
                  if (!servicesOpen) {
                    handleCloseServicesMenu();
                  }
                }}
              >
                Services
              </Typography>
              <Typography variant="body1">
                <Link to="/client" className={styles.navLink}>
                  Client Work
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link to="/contact" className={styles.navLink}>
                  Contact
                </Link>
              </Typography>

            </Box>
            {/* <Popover
              id="services-menu"
              anchorEl={anchorElServices}
              open={Boolean(anchorElServices)}
              onClose={handleCloseServicesMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => {
                setServicesOpen(false);
                handleCloseServicesMenu();
              }}
              className={styles.popoverContainer}
            >
              <List sx={{ width: "600px",textAlign: "center",}}>
                  <ListItem
                    button
                  onClick={() => handleServiceClick("Web Development")}
                  >
                  <ListItemText primary="Web Development"  className={styles.serviceText} />
                  </ListItem>

                <ListItem
                  button
                  onClick={() => handleServiceClick("Web Designing") }
                >
                  <ListItemText primary="Web Designing" className={styles.serviceText}/>
                </ListItem>
                <ListItem
                  button
                  onClick={() => handleServiceClick("Digital Marketing")}
                >
                  <ListItemText primary="Digital Marketing" className={styles.serviceText}/>
                </ListItem>
                <ListItem button onClick={() => handleServiceClick("SEO")}>
                  <ListItemText primary="SEO" className={styles.serviceText}/>
                </ListItem>
              </List>
            </Popover> */}
            <div
              onMouseLeave={handleCloseServicesMenu}
              style={{ position: 'relative', zIndex: 1 }} 
            >
              <Menu
                ref={menuRef}
                id="services-menu"
                anchorEl={anchorElServices}
                open={Boolean(anchorElServices)}
                onClose={handleCloseServicesMenu}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                className={styles.PopoverContainer}
              >
                {["Web Development", "Web Designing", "Digital Marketing", "SEO"].map(service => (
                  <MenuItem
                    key={service}
                    onClick={() => handleServiceClick(service)}
                    // sx={{  display: "block", margin: "auto" }}
                  >
                    <Typography className={styles.serviceText}>{service}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </div>

            <Box>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="User Avatar"
                    src="/dynamic/path/to/user-avatar.jpg"
                  />
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
                  <MenuItem key={setting} onClick={setting === 'Logout' ? handleLogout : handleCloseUserMenu}>
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
