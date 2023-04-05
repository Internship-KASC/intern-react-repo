import {
  Button,
  FormControl,
  styled,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import {} from "@mui/icons-material";

export const RegisterTypography = styled(Typography)({
  textAlign: "center",
  margin: 2,
});

export const InputTextField = styled(TextField)({
  marginTop: 15,
  marginBottom: 15,
});

export const PasswordControl = styled(FormControl)({
  marginTop: 15,
  marginBottom: 15,
});

export const SLButton = styled(Button)({
  margin: 3,
  borderRadius: 5,
});

export const FormBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
