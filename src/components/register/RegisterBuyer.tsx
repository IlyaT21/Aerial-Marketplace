import { Stack, Button, TextField, FormControl } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import { Box } from "@mui/system";

interface RegisterBuyerProps {
  handleSelectProfile: (type: "buyer" | "seller" | null) => void;
}

function RegisterBuyer({ handleSelectProfile }: RegisterBuyerProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform form validation here (e.g., check if passwords match)
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Submit form data
    console.log({ firstName, lastName, email, password });
  };

  return (
    <Stack alignItems="flex-start" spacing={2}>
      <Button
        size="small"
        startIcon={<ArrowBackIosIcon />}
        onClick={() => handleSelectProfile(null)}
      >
        Back
      </Button>
      <Stack spacing={4} width="100%" alignItems="center">
        <FormControl fullWidth required>
          <TextField
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth required>
          <TextField
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth required>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth required>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth required>
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>

        <Box maxWidth="fit-content">
          <Button variant="contained" fullWidth onClick={handleSubmit}>
            Register
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}

export default RegisterBuyer;