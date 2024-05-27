import React from 'react';
import { Drawer, List, ListItem, ListItemText, Accordion, AccordionDetails, Typography, IconButton, Avatar, Box } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import Avatar2 from "../../../assets/clientImg/avatar.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faCog, faSignOutAlt, faAngleDown, faXmark } from '@fortawesome/free-solid-svg-icons';
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
  },
];

const pages = [
  {
    href: "/",
    title: "Home",
    id: "1",
    icon: faHome
  },
  {
    href: "/client",
    title: "Client Work",
    id: "2",
    icon: faBriefcase
  },
  {
    href: "/contact",
    title: "Setting",
    id: "3",
    icon: faCog
  },
];

const DrawerNavigation = ({ open, onClose, user }) => {

  const navigate = useNavigate();
  const [showServices, setShowServices] = React.useState(false);
  const userName = user.data.firstName;


  const handleServiceClick = (service) => {
    if (service === "Web Development") {
      navigate("/webdevelopment");
    } else if (service === "Web Designing") {
      navigate("/webdesigning");
    } else if (service === "Digital Marketing") {
      navigate("/digitalmarketing");
    } else if (service === "SEO") {
      navigate("/seo");
    }
  };

  const handleServicesClick = () => {
    setShowServices(!showServices);
  };

  const handleLogout = () => {
    navigate("/login");
  };


  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant="temporary"
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: 'black',
          color: 'white',
          width: '240px',
        },
      }}
    >
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <List>
          <Box sx={{ display: "block", ml: "auto" }}>
            <Box sx={{ display: "flex", alignItems: "center", m: "20px", justifyContent: 'space-between' }}>
              <Box sx={{ display: "flex", alignItems: "center", }}>
                <Box mr={2} >
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt="User Avatar" src={Avatar2} />
                  </IconButton>
                </Box>

                <Box >
                  <Typography variant='body1' sx={{ fontSize: "18px", color: "#fff" }}>{userName}</Typography>
                </Box>
              </Box>

              <Box>
                <FontAwesomeIcon icon={faXmark} fontSize="28px" sx={{ color: "#fff" }} onClick={onClose} />
              </Box>
            </Box>
          </Box>

          {pages.map((page) => (
            <ListItem button key={page.id} component={Link} to={page.href}
              sx={{
                backgroundColor: 'black',
                color: 'white'
              }}>
              <FontAwesomeIcon icon={page.icon} sx={{ mr: 2 }} />
              <ListItemText primary={page.title} sx={{
                ml: 2, '&:hover': {
                  color: '#FFD700',
                },
              }} />
            </ListItem>
          ))}
          <ListItem button onClick={handleServicesClick}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faAngleDown} />
              <ListItemText primary="Services" sx={{ ml: 2, ':hover': { color: '#FFD700' }, '.Mui-selected': { fontWeight: 'bold' } }} />
            </Box>
          </ListItem>
          {showServices && (
            <Accordion sx={{ backgroundColor: 'black', color: 'white' }}>
              <AccordionDetails>
                {ServicesContent.map((service) => (
                  <Typography
                    key={service.id}
                    variant="body1"
                    onClick={() => handleServiceClick(service.title)}
                    sx={{
                      cursor: "pointer",
                      mt: 1,
                      '&:hover': {
                        color: '#FFD700',
                      },
                    }}
                  >
                    {service.title}
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          )}
        </List>

        <Box sx={{ mt: 'auto' }}>
          <List>
            <ListItem button onClick={handleLogout} sx={{ backgroundColor: 'black', color: 'white' }}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              <ListItemText primary="Logout" sx={{
                ml: 2, '&:hover': {
                  color: '#FFD700',
                },
              }} />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Drawer >
  );
};

export default DrawerNavigation;
