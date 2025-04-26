import {
  Button,
  FormControl,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function ProductEdit() {
  useEffect(() => {
    const token = localStorage.getItem("token");

    function checkUser() {
      if (!token) return;

      const decodedToken: any = jwtDecode(token);
      console.log(decodedToken);

      // Check if user is admin or the seller who created the product
      if (decodedToken.role !== "admin" && decodedToken.id !== sellerId) {
        navigate("/");
      }

      if (decodedToken.id !== sellerId) {
        // navigate("/");
        console.log(decodedToken.id);
        console.log(sellerId);
      }
    }
    checkUser();
  });

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
  const [sellerId, setSellerId] = useState("");

  const { id: productId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1950 + 1 },
    (_, i) => currentYear - i
  );

  const navigate = useNavigate();

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
    }
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data: product } = await axios.get(
          `http://localhost:5000/api/products/${productId}`
        );

        if (!isLoaded) {
          if (product.productImage) {
            setPreview(`http://localhost:5000/uploads/${product.productImage}`);
          }
          setProductName(product.productName || "");
          setCategory(product.category || "");
          setProductDescription(product.productDescription || "");
          setPrice(product.price || "");
          setModel(product.model || "");
          setManufacturer(product.manufacturer || "");
          setYear(product.year || "");
          setCondition(product.condition || "");
          setRegistration(product.registration || "");
          setSellerId(product.sellerId._id);
          setFile(null);
          setIsLoaded(true);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  });

  let userId: string | null | undefined = null;
  userId = sellerId;

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

    if (file) {
      formData.append("image", file);
    }

    try {
      await axios.put(
        `http://localhost:5000/api/products/${productId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Product updated successfully!");
    } catch (error: any) {
      console.error(
        "Error updating product:",
        error.response?.data || error.message
      );
      alert(`Error: ${error.response?.data?.message || error.message}`);
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
      <Typography variant="h3">Edit Product</Typography>
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

        <FormControl fullWidth required>
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

        <FormControl fullWidth required>
          <TextField
            label="Condition"
            variant="outlined"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth required>
          <TextField
            label="Registration"
            variant="outlined"
            value={registration}
            onChange={(e) => setRegistration(e.target.value)}
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

export default ProductEdit;
