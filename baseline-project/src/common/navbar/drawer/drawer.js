import React from 'react';
import { Drawer, List, ListItem, ListItemText, Accordion, AccordionDetails, Typography, Tooltip, IconButton, Avatar, Box } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import Avatar2 from "../../../assets/clientImg/avatar.png"
import { useSelector } from 'react-redux';
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
    id: "1"
  },
  {
    href: "/client",
    title: "Client Work",
    id: "2"
  },
  {
    href: "/contact",
    title: "Contact",
    id: "3"
  },
  {
    href: "/contact",
    title: "Setting",
    id: "4"
  },
];

const DrawerNavigation = ({ open, onClose, userName  }) => {

  const navigate = useNavigate();
  const [showServices, setShowServices] = React.useState(false);
  const user = useSelector((state) => state.user.user); 


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
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: 'black',
          color: 'white',
          width: '240px',
        },
      }}
    >
      <List>
        <Box sx={{ display: "block", ml: "auto" }}>
          <Box sx={{ display: "flex", alignItems: "center", m: "20px" }}>

            <Box mr={2}>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src={Avatar2} />
              </IconButton>
            </Box>
            <Box>
              <Typography variant='body1' sx={{ fontSize: "18px", color: "#fff" }}> {userName}</Typography>
            </Box>
          </Box>
        </Box>

        {pages.map((page) => (
          <ListItem button key={page.id} component={Link} to={page.href}>
            <ListItemText primary={page.title} />
          </ListItem>
        ))}
        <ListItem button onClick={handleServicesClick}>
          <ListItemText primary="Services" />
        </ListItem>
        {showServices && (
          <Accordion sx={{ backgroundColor: 'black', color: 'white' }}>
            <AccordionDetails>
              {ServicesContent.map((service) => (
                <Typography
                  key={service.id}
                  variant="body1"
                  onClick={() => handleServiceClick(service.title)}
                  style={{ cursor: "pointer" }}
                >
                  {service.title}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        )}
      </List>
      <List>
        <ListItem button onClick={handleLogout}>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerNavigation;
