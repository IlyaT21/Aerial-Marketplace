import {
  Button,
  FormControl,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  MenuItem,
  Select,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function ProductAdd() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [model, setModel] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [year, setYear] = useState("");
  const [condition, setCondition] = useState("");
  const [registration, setRegistration] = useState("");

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1950 + 1 },
    (_, i) => currentYear - i
  );

  const handleChangeYear = (event: SelectChangeEvent<string>) => {
    setYear(event.target.value);
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const selectedFile = input.files[0];
      setFile(selectedFile);

      // Create a preview URL for the selected file
      const previewUrl = URL.createObjectURL(selectedFile);
      setPreview(previewUrl);

      console.log("Selected file:", selectedFile);
    }
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value);
  };

  const [open, setOpen] = useState(false);

  const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    setOpen(true);
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const token = localStorage.getItem("token");

  let userId: string | null = null;
  if (token) {
    const decodedToken = jwtDecode<{ id: string; role: string }>(token);
    userId = decodedToken.id;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("category", category);
    formData.append("productDescription", productDescription);
    formData.append("price", price);
    formData.append("model", model);
    formData.append("manufacturer", manufacturer);
    formData.append("year", year);
    formData.append("condition", condition);
    formData.append("registration", registration);
    formData.append("sellerId", userId!);

    console.log(category);

    if (file) {
      formData.append("image", file); // "image" matches multer's field name
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert("Product created successfully!");
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error: any) {
      console.error("Error submitting product:", error.message);
      alert("An error occurred while submitting the product.");
    }
  };

  return (
    <Stack alignItems="flex-start" spacing={2}>
      <Button
        size="small"
        startIcon={<ArrowBackIosIcon />}
        onClick={() => setOpen(true)}
      >
        Back
      </Button>
      <Typography variant="h3">Add Product</Typography>
      <Stack spacing={4} width="100%" alignItems="center">
        {preview && (
          <img
            src={preview}
            alt="File preview"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              marginTop: "1rem",
            }}
          />
        )}

        <FormControl fullWidth required>
          <TextField
            type="file"
            inputProps={{ accept: "image/*" }}
            label="Product Image"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            onChange={handleFileChange}
          />
        </FormControl>

        <FormControl fullWidth required>
          <TextField
            label="Product Name"
            variant="outlined"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth required>
          <InputLabel id="product-category-label">Product Category</InputLabel>
          <Select
            labelId="product-category-label"
            id="product-category"
            value={category}
            onChange={handleCategoryChange}
          >
            <MenuItem value="Drones">Drones</MenuItem>
            <MenuItem value="Planes">Planes</MenuItem>
            <MenuItem value="Helicopters">Helicopters</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth required>
          <TextField
            label="Product Description"
            variant="outlined"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth required>
          <TextField
            label="Price"
            type="number"
            variant="outlined"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            label="Model"
            variant="outlined"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth required>
          <TextField
            label="Manufacturer"
            variant="outlined"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth required>
          <InputLabel id="year-select-label">Year</InputLabel>
          <Select
            labelId="year-select-label"
            value={year}
            onChange={handleChangeYear}
            label="Year"
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <TextField
            label="Condition"
            variant="outlined"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            label="Registration"
            variant="outlined"
            value={registration}
            onChange={(e) => setRegistration(e.target.value)}
          />
        </FormControl>
        <Stack width="100%" direction="row" justifyContent="center" gap={4}>
          <Button variant="contained" onClick={handleSubmit}>
            Add Product
          </Button>
        </Stack>
      </Stack>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Unsaved Changes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have unsaved changes. Do you wish to save them?
          </DialogContentText>
          <Stack direction="row" alignItems="center" my={4} gap={4}>
            <Button variant="contained" color="error" href="/admin-dashboard">
              Don't save
            </Button>
            <Button variant="contained" href="/admin-dashboard">
              Save changes
            </Button>
            <Button variant="outlined" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </Stack>
  );
}

export default ProductAdd;
