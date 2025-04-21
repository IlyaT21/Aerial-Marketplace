import { Stack, Button, TextField, FormControl } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Perform form validation here (e.g., check if passwords match)
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
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
        }
      );

      console.log("User registered successfully:", response.data);
      alert("User registered successfully!");
      navigate("/login");
    } catch (error: any) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Error registering user:", error.response.data);
        alert(`Error: ${error.response.data.message}`);
      } else {
        // Other errors (e.g., network)
        console.error("Network error:", error.message);
        alert(
          "An error occurred while registering the user. Please try again."
        );
      }
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
