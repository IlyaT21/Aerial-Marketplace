import {
  Stack,
  FormControl,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Divider,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import { Box } from "@mui/system";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Stack
      justifyContent="center"
      gap={4}
      px={4}
      py={4}
      sx={{
        minHeight: {
          xs: "calc(100vh - 108px)",
          sm: "calc(100vh - 116px)",
          md: "calc(100vh - 132px)",
          width: "100%",
          maxWidth: "600px",
        },
      }}
    >
      <Stack spacing={3} sx={{ width: "100%", margin: "0 auto" }}>
        <FormControl fullWidth>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            required
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <Box>
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
        </Box>
      </Stack>
      <Divider></Divider>
      <Stack gap={4}>
        <Typography variant="h6">Don't have an account?</Typography>
        <Box>
          <Button variant="contained" href="/register">
            Create an Account
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Login;
