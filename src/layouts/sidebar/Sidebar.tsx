import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import MiscellaneousServicesRoundedIcon from "@mui/icons-material/MiscellaneousServicesRounded";
import { Box, Hidden, ListItemIcon, Typography, useTheme } from "@mui/material";
import { NAV_LINKS } from "../../constants";

const SidebarItem = () => {
  const theme = useTheme();
  const location = useLocation();
  const navLinks = NAV_LINKS;
  return (
    <Box
      sx={{
        backgroundColor: "#7f0a47",
        padding: 2,

        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          sm: "100%",
          lg: 200,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          gap: 3,
          alignItems: {
            xs: "center",
            lg: "start",
          },
          width: "100%",
        }}
      >
        <Hidden smDown>
          <Typography variant="h6" style={{ color: "#FFFFFF" }}>
            Sii Media
          </Typography>
          {/* <img
            src={`https://i.imgur.com/RCTjuUc.png`}
            alt={"asda"}
            loading="lazy"
            style={{
              width: "160px",
              height: "50px",
            }}
          /> */}
        </Hidden>
        <Box
          sx={{
            py: {
              xs: "0px",
              ls: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 5,
          }}
        >
          {navLinks.map(item => (
            <Link
              key={item.name}
              to={item.link}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",

                  color: "white",
                  textDecoration: "none",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <item.icon />
                </ListItemIcon>

                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      lg: "16px",
                    },
                    "&:hover": {
                      color: "#166983",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
    // <Sidebar
    //   style={{
    //     height: "100vh",
    //     top: "auto",
    //   }}
    //   backgroundColor={theme.palette.primary.main}
    // >
    //   {/* Add company name at the top */}
    //   <Box style={{ padding: "20px", borderBottom: "1px solid #FFFFFF" }}>
    //     <Typography variant="h6" style={{ color: "#FFFFFF" }}>
    //       Sii Media
    //     </Typography>
    //   </Box>
    //   <Menu
    //     menuItemStyles={{
    //       button: {
    //         ":active": {
    //           backgroundColor: "#b6c8d9",
    //           color: "#b6c8d9",
    //         },
    //         ":hover": { backgroundColor: "#13395e" },
    //       },
    //     }}
    //   >
    //     {navLinks.map(item => (
    //       <MenuItem
    //         component={<Link to={item.link} />}
    //         icon={<item.icon />}
    //         style={{ borderBottom: "1px solid #FFFFFF" }}
    //         active={location.pathname === "/services"}
    //       >
    //         <Typography variant="body2" style={{ color: "#FFFFFF" }}>
    //           {item.name}
    //         </Typography>
    //       </MenuItem>
    //     ))}
    //   </Menu>
    // </Sidebar>
  );
};

export default SidebarItem;
