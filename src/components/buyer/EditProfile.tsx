import { Button, FormControl, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

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

function EditProfile() {
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

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        return;
      }

      try {
        const decodedToken = jwtDecode<{ id: string }>(token);
        const userId = decodedToken.id;

        const { data } = await axios.get(
          `http://localhost:5000/api/users/${userId}`
        );

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
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

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
      const decodedToken = jwtDecode<{ id: string }>(token);
      const userId = decodedToken.id;

      await axios.put(`http://localhost:5000/api/users/${userId}`, updatedUser);
      alert("User updated successfully!");
    } catch (error: any) {
      console.error("Error updating user:", error.message);
      alert(`Error updating user: ${error.message}`);
    }
  };
  return (
    <Stack alignItems="flex-start" spacing={2}>
      <Typography variant="h3">Edit Profile Information</Typography>
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

export default EditProfile;
