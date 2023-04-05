import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./Themes/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Router>
);
