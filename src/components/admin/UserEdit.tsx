import { Button, FormControl, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

function UserEdit() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log({ firstName, lastName, email, password });
  };
  return (
    <Stack alignItems="flex-start" spacing={2}>
      <Typography variant="h3">Edit User</Typography>
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
            label="Company"
            variant="outlined"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
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
            label="Country"
            variant="outlined"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth required>
          <TextField
            label="City"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth required>
          <TextField
            label="Address"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth required>
          <TextField
            label="Change Password"
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
        <Stack width="100%" direction="row" justifyContent="center" gap={4}>
          <Button variant="contained" onClick={handleSubmit}>
            Save Changes
          </Button>
          <Button variant="contained" color="error">
            Delete User
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default UserEdit;
