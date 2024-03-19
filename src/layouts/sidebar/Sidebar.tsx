import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import MiscellaneousServicesRoundedIcon from "@mui/icons-material/MiscellaneousServicesRounded";
import { Box, Typography, useTheme } from "@mui/material";
import { NAV_LINKS } from "../../constants";

const SidebarItem = () => {
  const theme = useTheme();
  const location = useLocation();
  const navLinks = NAV_LINKS;
  return (
    <Sidebar
      style={{
        height: "100vh",
        top: "auto",
      }}
      backgroundColor={theme.palette.primary.main}
    >
      {/* Add company name at the top */}
      <Box style={{ padding: "20px", borderBottom: "1px solid #FFFFFF" }}>
        <Typography variant="h6" style={{ color: "#FFFFFF" }}>
          Sii Media
        </Typography>
      </Box>
      <Menu
        menuItemStyles={{
          button: {
            ":active": {
              backgroundColor: "#b6c8d9",
              color: "#b6c8d9",
            },
            ":hover": { backgroundColor: "#13395e" },
          },
        }}
      >
        {navLinks.map(item => (
          <MenuItem
            component={<Link to={item.link} />}
            icon={<item.icon />}
            style={{ borderBottom: "1px solid #FFFFFF" }}
            active={location.pathname === "/services"}
          >
            <Typography variant="body2" style={{ color: "#FFFFFF" }}>
              {item.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Sidebar>
  );
};

export default SidebarItem;
