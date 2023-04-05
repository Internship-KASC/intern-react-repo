import { Box, Toolbar, styled, Button } from "@mui/material";

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export const LoginButton = styled(Button)({
  borderRadius: 10,
  color: "white",
  background: "#1976d2",
  ":hover": {
    background: "#1565c0",
  },
});

export const LogoBox = styled(Box)({
  display: "flex",
  gap: 10,
  alignItems: "center",
  cursor: "pointer",
});

export const MenuBox = styled(Box)({
  display: "flex",
  gap: 30,
  alignItems: "center",
  color: "white",
  fontSize: "1.5rem",
});

export const LoginBox = styled(Box)({
  display: "flex",
  gap: 20,
  alignItems: "center",
  cursor: "pointer",
});
