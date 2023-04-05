import { createTheme } from "@mui/material";
// import { blue, grey, amber } from "@mui/material/colors";

export const Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5d4037",
    },
    secondary: {
      main: "#f50057",
    },
    warning: {
      main: "#ff9800",
    },
    success: {
      main: "#4caf50",
    },
  },
  typography: {
    myVariant: {
      color: "blue",
      spacing: 1,
    },
  },
});
