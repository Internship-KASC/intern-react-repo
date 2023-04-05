import React, { useState } from "react";
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
  Button,
} from "@mui/material";
import {
  HowToRegOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  FormBox,
  InputTextField,
  PasswordControl,
  RegisterTypography,
} from "./SignupStyle";

const Signup = () => {
  const [input, setInput] = useState({
    Username: "",
    email: "",
    Password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // for show/hide password

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <FormBox component='form' onSubmit={handleSubmit}>
      <RegisterTypography component='h4' sx={{ color: "blue", fontSize: 18 }}>
        <b>Welcome!</b>
      </RegisterTypography>
      <RegisterTypography variant='body2' sx={{ fontSize: 14 }}>
        Please enter the details to Register ...
      </RegisterTypography>
      <InputTextField
        name='Username'
        variant='outlined'
        fullWidth
        autoFocus
        type={"text"}
        value={input.Username}
        onChange={handleChange}
        placeholder='ex: John Doe'
        label='Username'
        required
        autoComplete='user-name'
      />
      <InputTextField
        name='email'
        type={"email"}
        fullWidth
        value={input.email}
        onChange={handleChange}
        placeholder='ex: johndoe@gmai.com'
        required
        variant='outlined'
        label='email'
        autoComplete='email'
      />
      <PasswordControl fullWidth variant='outlined'>
        <InputLabel htmlFor='Password'>Password</InputLabel>
        <OutlinedInput
          id='Password'
          name='Password'
          required
          autoComplete='new-password'
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
      <PasswordControl fullWidth variant='outlined'>
        <InputLabel htmlFor='confirmPassword'>Confirm Password</InputLabel>
        <OutlinedInput
          id='confirmPassword'
          name='confirmPassword'
          required
          autoComplete='current-password'
          value={input.confirmPassword}
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
          label='Confirm Password'
        />
      </PasswordControl>
      <Button
        endIcon={<HowToRegOutlined />}
        type='submit'
        variant='contained'
        color='secondary'
      >
        Register
      </Button>
    </FormBox>
  );
};

export default Signup;
