import React, { useState } from "react";
import {
  // Checkbox,
  // FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { LoginOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormBox,
  InputTextField,
  PasswordControl,
  RegisterTypography,
  SLButton,
} from "./SignupStyle";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [input, setInput] = useState({
    email: "",
    Password: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitLoginForm = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <FormBox component='form' onSubmit={handleSubmitLoginForm}>
      <RegisterTypography component='h4' sx={{ color: "blue", fontSize: 18 }}>
        <b>Welcome!</b>
      </RegisterTypography>
      <RegisterTypography variant='body2' sx={{ fontSize: 14 }}>
        Sign in to Continue
      </RegisterTypography>
      <InputTextField
        name='email'
        type={"email"}
        fullWidth
        value={input.email}
        onChange={handleChange}
        placeholder='ex: johndoe@gmai.com'
        required
        variant='outlined'
        label='Email'
        autoFocus
        autoComplete='user-name'
      />
      <PasswordControl fullWidth variant='outlined'>
        <InputLabel htmlFor='Password'>Password</InputLabel>
        <OutlinedInput
          id='Password'
          name='Password'
          required
          autoComplete='current-password'
          value={input.Password}
          onChange={handleChange}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label='Password'
        />
      </PasswordControl>
      {/* <FormControlLabel
        name='loginRememberme'
        onChange={handleChange}
        checked={input.loginRememberme}
        control={<Checkbox />}
        label='Remember Me'
      /> */}
      <SLButton
        endIcon={<LoginOutlined />}
        type='submit'
        variant='contained'
        color='secondary'
      >
        Sign in
      </SLButton>
    </FormBox>
  );
};

export default Login;
