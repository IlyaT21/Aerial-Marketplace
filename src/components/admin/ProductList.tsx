import {
  Card,
  Typography,
  CardContent,
  Button,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { Stack } from "@mui/system";
import Grid from "@mui/material/Grid2";
import ClearIcon from "@mui/icons-material/Clear";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Products per category
  const [drones, setDrones] = useState<any[]>([]);
  const [planes, setPlanes] = useState<any[]>([]);
  const [helicopters, setHelicopters] = useState<any[]>([]);
  const [other, setOther] = useState<any[]>([]);

  const handleOpenDialog = (listingTitle: any, _id: string) => {
    setSelectedProduct({ listingTitle, _id });
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const fetchProducts = async () => {
    try {
      const endpointDrones = `http://localhost:5000/api/products/category/Drones`;
      const endpointPlanes = `http://localhost:5000/api/products/category/Planes`;
      const endpointHelicopters = `http://localhost:5000/api/products/category/Helicopters`;
      const endpointOther = `http://localhost:5000/api/products/category/Other`;

      const { data: dataDrones } = await axios.get(endpointDrones);
      const { data: dataPlanes } = await axios.get(endpointPlanes);
      const { data: dataHelicopters } = await axios.get(endpointHelicopters);
      const { data: dataOther } = await axios.get(endpointOther);

      // console.log("Fetched products:", data);

      setDrones(dataDrones.products);
      setPlanes(dataPlanes.products);
      setHelicopters(dataHelicopters.products);
      setOther(dataOther.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async () => {
    if (!selectedProduct?._id) return;

    try {
      const response = await axios.delete(
        `http://localhost:5000/api/products/${selectedProduct._id}`
      );
      if (response.status === 200) {
        setOpen(false);

        fetchProducts();
      }
    } catch (error) {
      console.error("Delete product error:", error);
      alert("Failed to delete product");
    }
  };

  return (
    <Stack gap={8}>
      <Stack gap={4}>
        <Typography textAlign="left" variant="h4">
          Drones:
        </Typography>
        <Grid
          display="grid"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 2,
          }}
        >
          {drones.length > 0 ? (
            drones.map((product) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product._id}>
                <Card elevation={4}>
                  <CardContent>
                    <CardMedia
                      sx={{ padding: 2 }}
                      component="img"
                      image={
                        product?.productImage
                          ? `http://localhost:5000/uploads/${product.productImage}`
                          : "/images/placeholder/placeholder.webp"
                      }
                      alt={product.productName}
                      height="250"
                    />
                    <Typography
                      variant="body1"
                      gutterBottom
                      color="primary"
                      textAlign="left"
                    >
                      {product.productName}
                    </Typography>
                    <Typography
                      variant="body1"
                      gutterBottom
                      color="primary"
                      textAlign="left"
                    >
                      {product.sellerId.firstName} {product.sellerId.lastName}
                    </Typography>
                    <Stack
                      sx={{
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        alignItems: "flex-start",
                      }}
                    >
                      <Button
                        fullWidth
                        component={Link}
                        to={`/edit-product/${product._id}`}
                        startIcon={
                          <AirplanemodeActiveIcon></AirplanemodeActiveIcon>
                        }
                        variant="contained"
                      >
                        Edit Product
                      </Button>
                      <Button
                        fullWidth
                        startIcon={<ClearIcon></ClearIcon>}
                        variant="contained"
                        sx={{ marginLeft: 0 }}
                        onClick={() =>
                          handleOpenDialog(product.productName, product._id)
                        }
                      >
                        Delete Listing
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h6">No products found.</Typography>
          )}
        </Grid>
        <Typography textAlign="left" variant="h4" gutterBottom>
          Planes:
        </Typography>
        <Grid
          display="grid"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 2,
          }}
        >
          {planes.length > 0 ? (
            planes.map((product) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product._id}>
                <Card elevation={4}>
                  <CardContent>
                    <CardMedia
                      sx={{ padding: 2 }}
                      component="img"
                      image={
                        product?.productImage
                          ? `http://localhost:5000/uploads/${product.productImage}`
                          : "/images/placeholder/placeholder.webp"
                      }
                      alt={product.productName}
                      height="250"
                    />
                    <Typography
                      variant="body1"
                      gutterBottom
                      color="primary"
                      textAlign="left"
                    >
                      {product.productName}
                    </Typography>
                    <Typography
                      variant="body1"
                      gutterBottom
                      color="primary"
                      textAlign="left"
                    >
                      {product.sellerId.firstName} {product.sellerId.lastName}
                    </Typography>
                    <Stack
                      sx={{
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        alignItems: "flex-start",
                      }}
                    >
                      <Button
                        fullWidth
                        component={Link}
                        to={`/edit-product/${product._id}`}
                        startIcon={
                          <AirplanemodeActiveIcon></AirplanemodeActiveIcon>
                        }
                        variant="contained"
                      >
                        Edit Product
                      </Button>
                      <Button
                        fullWidth
                        startIcon={<ClearIcon></ClearIcon>}
                        variant="contained"
                        sx={{ marginLeft: 0 }}
                        onClick={() =>
                          handleOpenDialog(product.productName, product._id)
                        }
                      >
                        Delete Listing
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h6">No products found.</Typography>
          )}
        </Grid>
        <Typography textAlign="left" variant="h4" gutterBottom>
          Helicopters:
        </Typography>
        <Grid
          display="grid"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 2,
          }}
        >
          {helicopters.length > 0 ? (
            helicopters.map((product) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product._id}>
                <Card elevation={4}>
                  <CardContent>
                    <CardMedia
                      sx={{ padding: 2 }}
                      component="img"
                      image={
                        product?.productImage
                          ? `http://localhost:5000/uploads/${product.productImage}`
                          : "/images/placeholder/placeholder.webp"
                      }
                      alt={product.productName}
                      height="250"
                    />
                    <Typography
                      variant="body1"
                      gutterBottom
                      color="primary"
                      textAlign="left"
                    >
                      {product.productName}
                    </Typography>
                    <Typography
                      variant="body1"
                      gutterBottom
                      color="primary"
                      textAlign="left"
                    >
                      {product.sellerId.firstName} {product.sellerId.lastName}
                    </Typography>
                    <Stack
                      sx={{
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        alignItems: "flex-start",
                      }}
                    >
                      <Button
                        fullWidth
                        component={Link}
                        to={`/edit-product/${product._id}`}
                        startIcon={
                          <AirplanemodeActiveIcon></AirplanemodeActiveIcon>
                        }
                        variant="contained"
                      >
                        Edit Product
                      </Button>
                      <Button
                        fullWidth
                        startIcon={<ClearIcon></ClearIcon>}
                        variant="contained"
                        sx={{ marginLeft: 0 }}
                        onClick={() =>
                          handleOpenDialog(product.productName, product._id)
                        }
                      >
                        Delete Listing
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h6">No products found.</Typography>
          )}
        </Grid>
        <Typography textAlign="left" variant="h4" gutterBottom>
          Other:
        </Typography>
        <Grid
          display="grid"
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 2,
          }}
        >
          {other.length > 0 ? (
            other.map((product) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product._id}>
                <Card elevation={4}>
                  <CardContent>
                    <CardMedia
                      sx={{ padding: 2 }}
                      component="img"
                      image={
                        product?.productImage
                          ? `http://localhost:5000/uploads/${product.productImage}`
                          : "/images/placeholder/placeholder.webp"
                      }
                      alt={product.productName}
                      height="250"
                    />
                    <Typography
                      variant="body1"
                      gutterBottom
                      color="primary"
                      textAlign="left"
                    >
                      {product.productName}
                    </Typography>
                    <Typography
                      variant="body1"
                      gutterBottom
                      color="primary"
                      textAlign="left"
                    >
                      {product.sellerId.firstName} {product.sellerId.lastName}
                    </Typography>
                    <Stack
                      sx={{
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        alignItems: "flex-start",
                      }}
                    >
                      <Button
                        fullWidth
                        component={Link}
                        to={`/edit-product/${product._id}`}
                        startIcon={
                          <AirplanemodeActiveIcon></AirplanemodeActiveIcon>
                        }
                        variant="contained"
                      >
                        Edit Product
                      </Button>
                      <Button
                        fullWidth
                        startIcon={<ClearIcon></ClearIcon>}
                        variant="contained"
                        sx={{ marginLeft: 0 }}
                        onClick={() =>
                          handleOpenDialog(product.productName, product._id)
                        }
                      >
                        Delete Listing
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h6">No products found.</Typography>
          )}
        </Grid>
        <Dialog open={open} onClose={handleCloseDialog}>
          <DialogTitle textAlign="center">Delete Listing</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete {selectedProduct?.listingTitle}?
            </DialogContentText>
            <Stack
              alignItems="center"
              justifyContent="center"
              flexDirection="row"
              gap={2}
              my={4}
            >
              <Button variant="contained" color="error" onClick={handleDelete}>
                Delete Lisitng
              </Button>
              <Button
                onClick={() => setOpen(false)}
                variant="contained"
                color="primary"
              >
                Cancel
              </Button>
            </Stack>
          </DialogContent>
        </Dialog>
      </Stack>
    </Stack>
  );
}

export default ProductList;
