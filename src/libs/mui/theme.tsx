import React, { FC, PropsWithChildren } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const MuiTheme: FC<PropsWithChildren<{}>> = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#7f0a47",
      },
      secondary: {
        main: "#166983",
      },
      background: {
        default: "#dfe0e7",
      },
      text: {
        primary: "#000000", // Set default text color to black
      },
    },
    components: {
      MuiOutlinedInput: {
        defaultProps: {
          color: "secondary",
        },
        styleOverrides: {
          root: {
            "& .MuiInputLabel-root": {
              color: "white",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#7f0a47",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#7f0a47",
            },
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiTheme;
