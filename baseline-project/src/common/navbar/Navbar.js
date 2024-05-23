import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/new-logo3.png";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import Avatar2 from "../../assets/clientImg/avatar.png";
import DrawerNavigation from "./drawer/drawer";
import { Menu } from "@mui/material";

const pages = [
  {
    href: "/",
    title: "Home",
    id: "1"
  },
  {
    href: "/client",
    title: "Client Work",
    id: "3"
  },
  {
    href: "/contact",
    title: "Contact",
    id: "4"
  }
];

const ServicesContent = [
  {
    href: "/webdevelopment",
    title: "Web Development",
    id: "1"
  },
  {
    href: "/webdesigning",
    title: "Web Designing",
    id: "2"
  },
  {
    href: "/digitalmarketing",
    title: "Digital Marketing",
    id: "3"
  },
  {
    href: "/seo",
    title: "SEO",
    id: "4"
  }
];
const settings = ["Profile", "Dashboard", "Logout"];

function Navbar() {
  const history = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElServices, setAnchorElServices] = React.useState(null);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleToggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
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
    history("/login");
  };

  return (
    <>
      <AppBar className={styles.navbar}>
        <Container className={styles.navbarContainer}>
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={handleToggleDrawer}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ mr: 2,flexGrow: 1 }}>
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
                gap: "20px"
              }}
            >
              {pages.map((page) => (
                <Typography variant="body1" key={page.id}>
                  <Link to={page.href} className={styles.navLink}>
                    {page.title}
                  </Link>
                </Typography>
              ))}
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
            </Box>
            <div
              onMouseLeave={handleCloseServicesMenu}
              style={{ position: "relative", zIndex: 1 }}
            >
              <Menu
                id="services-menu"
                anchorEl={anchorElServices}
                open={Boolean(anchorElServices)}
                onClose={handleCloseServicesMenu}
                MenuListProps={{
                  "aria-labelledby": "basic-button"
                }}
                className={styles.PopoverContainer}
              >
                {ServicesContent.map((service) => (
                  <MenuItem
                    key={service.id}
                    onClick={() => handleServiceClick(service.title)}
                  >
                    <Typography className={styles.serviceText}>
                      {service.title}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </div>

            <Box sx={{ display: { xs: "none", md: "block" }, ml: "auto" }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User Avatar" src={Avatar2} />
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
                  <MenuItem
                    key={setting}
                    onClick={
                      setting === "Logout" ? handleLogout : handleCloseUserMenu
                    }
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <DrawerNavigation open={openDrawer} onClose={handleToggleDrawer} />
    </>
  );
}

export default Navbar;
