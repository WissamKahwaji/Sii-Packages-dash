import React, { ReactNode } from "react";
import SidebarItem from "./sidebar/Sidebar";
import { Box } from "@mui/material";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#166983",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        color: "white",
        gap: 3,
        overflowY: "hidden",
        height: "100vh",
      }}
    >
      <SidebarItem />
      <Box
        sx={{
          width: "100%",
          overflowY: "auto",
          padding: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
