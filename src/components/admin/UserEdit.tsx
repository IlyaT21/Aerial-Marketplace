import { Button, FormControl, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  role: string;
  company: string;
  city: string;
  address: string;
  country: string;
}

function UserEdit() {
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

  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/users/${id}`
        );

        // Populate state variables with the fetched user data
        setUser(data);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setCompany(data.company);
        setEmail(data.email);
        setPhone(data.phone);
        setCountry(data.country);
        setCity(data.city);
        setAddress(data.address);
      } catch (err: any) {
        console.error("Error fetching user:", err.message);
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Construct the updated user object
    const updatedUser = {
      firstName,
      lastName,
      email,
      phone,
      password: password || undefined,
      company: user?.role !== "buyer" ? company : undefined,
      country: user?.role !== "buyer" ? country : undefined,
      city: user?.role !== "buyer" ? city : undefined,
      address: user?.role !== "buyer" ? address : undefined,
    };

    try {
      await axios.put(`http://localhost:5000/api/users/${id}`, updatedUser);
      alert("User updated successfully!");
    } catch (error: any) {
      console.error("Error updating user:", error.message);
      alert(`Error updating user: ${error.message}`);
    }
  };
  return (
    <Stack alignItems="flex-start" spacing={2}>
      <Button
        size="small"
        startIcon={<ArrowBackIosIcon />}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
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

        {user?.role !== "buyer" && (
          <FormControl fullWidth required>
            <TextField
              label="Company"
              variant="outlined"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </FormControl>
        )}

        <FormControl fullWidth required>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        {user?.role !== "buyer" && (
          <FormControl fullWidth required>
            <TextField
              label="Phone"
              type="number"
              variant="outlined"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
        )}

        {user?.role !== "buyer" && (
          <FormControl fullWidth required>
            <TextField
              label="Country"
              variant="outlined"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </FormControl>
        )}

        {user?.role !== "buyer" && (
          <FormControl fullWidth required>
            <TextField
              label="City"
              variant="outlined"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </FormControl>
        )}

        {user?.role !== "buyer" && (
          <FormControl fullWidth required>
            <TextField
              label="Address"
              variant="outlined"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>
        )}

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
        </Stack>
      </Stack>
    </Stack>
  );
}

export default UserEdit;
