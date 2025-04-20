import { Stack, Button, TextField, FormControl } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import { Box } from "@mui/system";

interface RegisterSellerProps {
  handleSelectProfile: (type: "buyer" | "seller" | null) => void;
}

function RegisterSeller({ handleSelectProfile }: RegisterSellerProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const role = "seller";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Perform form validation here (e.g., check if passwords match)
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // Send a POST request to your backend
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          password,
          role,
          country,
          city,
          address,
          company,
        }),
      });

      // Handle the response
      if (response.ok) {
        const data = await response.json();
        console.log("User registered successfully:", data);
        alert("User registered successfully!");
      } else {
        const errorData = await response.json();
        console.error("Error registering user:", errorData);
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("An error occurred while registering the user. Please try again.");
    }
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
            label="Phone"
            type="number"
            variant="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth required sx={{ display: "none" }}>
          <TextField type="text" value={role} />
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

export default RegisterSeller;
