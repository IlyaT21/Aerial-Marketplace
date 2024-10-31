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
import { useState } from "react";

interface Product {
  listingTitle: string;
}

function ProductList() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenDialog = (listingTitle: string) => {
    setSelectedProduct({ listingTitle });
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedProduct(null);
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
              lg: "repeat(5, 1fr)",
            },
            gap: 2,
          }}
        >
          <Card elevation={4}>
            <CardContent>
              <CardMedia
                sx={{ padding: 2 }}
                component="img"
                image="/images/placeholder/drone-placeholder.png"
                alt="Thumbnail"
                height="250"
              />
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Big Drone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Seller
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
                  startIcon={<AirplanemodeActiveIcon></AirplanemodeActiveIcon>}
                  variant="contained"
                >
                  More Details
                </Button>
                <Button
                  fullWidth
                  startIcon={<ClearIcon></ClearIcon>}
                  variant="contained"
                  sx={{ marginLeft: 0 }}
                  onClick={() => handleOpenDialog("Big Drone")}
                >
                  Delete Listing
                </Button>
              </Stack>
            </CardContent>
          </Card>
          <Card elevation={4}>
            <CardContent>
              <CardMedia
                sx={{ padding: 2 }}
                component="img"
                image="/images/placeholder/drone-placeholder.png"
                alt="Thumbnail"
                height="250"
              />
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Big Drone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Seller
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
                  startIcon={<AirplanemodeActiveIcon></AirplanemodeActiveIcon>}
                  variant="contained"
                >
                  More Details
                </Button>
                <Button
                  fullWidth
                  startIcon={<ClearIcon></ClearIcon>}
                  variant="contained"
                  sx={{ marginLeft: 0 }}
                  onClick={() => handleOpenDialog("Big Drone")}
                >
                  Delete Listing
                </Button>
              </Stack>
            </CardContent>
          </Card>
          <Card elevation={4}>
            <CardContent>
              <CardMedia
                sx={{ padding: 2 }}
                component="img"
                image="/images/placeholder/drone-placeholder.png"
                alt="Thumbnail"
                height="250"
              />
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Big Drone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Seller
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
                  startIcon={<AirplanemodeActiveIcon></AirplanemodeActiveIcon>}
                  variant="contained"
                >
                  More Details
                </Button>
                <Button
                  fullWidth
                  startIcon={<ClearIcon></ClearIcon>}
                  variant="contained"
                  sx={{ marginLeft: 0 }}
                  onClick={() => handleOpenDialog("Big Drone")}
                >
                  Delete Listing
                </Button>
              </Stack>
            </CardContent>
          </Card>
          <Card elevation={4}>
            <CardContent>
              <CardMedia
                sx={{ padding: 2 }}
                component="img"
                image="/images/placeholder/drone-placeholder.png"
                alt="Thumbnail"
                height="250"
              />
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Big Drone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Seller
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
                  startIcon={<AirplanemodeActiveIcon></AirplanemodeActiveIcon>}
                  variant="contained"
                >
                  More Details
                </Button>
                <Button
                  fullWidth
                  startIcon={<ClearIcon></ClearIcon>}
                  variant="contained"
                  sx={{ marginLeft: 0 }}
                  onClick={() => handleOpenDialog("Big Drone")}
                >
                  Delete Listing
                </Button>
              </Stack>
            </CardContent>
          </Card>
          <Card elevation={4}>
            <CardContent>
              <CardMedia
                sx={{ padding: 2 }}
                component="img"
                image="/images/placeholder/drone-placeholder.png"
                alt="Thumbnail"
                height="250"
              />
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Big Drone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Seller
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
                  startIcon={<AirplanemodeActiveIcon></AirplanemodeActiveIcon>}
                  variant="contained"
                >
                  More Details
                </Button>
                <Button
                  fullWidth
                  startIcon={<ClearIcon></ClearIcon>}
                  variant="contained"
                  sx={{ marginLeft: 0 }}
                  onClick={() => handleOpenDialog("Big Drone")}
                >
                  Delete Listing
                </Button>
              </Stack>
            </CardContent>
          </Card>
          <Card elevation={4}>
            <CardContent>
              <CardMedia
                sx={{ padding: 2 }}
                component="img"
                image="/images/placeholder/drone-placeholder.png"
                alt="Thumbnail"
                height="250"
              />
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Big Drone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Seller
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
                  startIcon={<AirplanemodeActiveIcon></AirplanemodeActiveIcon>}
                  variant="contained"
                >
                  More Details
                </Button>
                <Button
                  fullWidth
                  startIcon={<ClearIcon></ClearIcon>}
                  variant="contained"
                  sx={{ marginLeft: 0 }}
                  onClick={() => handleOpenDialog("Big Drone")}
                >
                  Delete Listing
                </Button>
              </Stack>
            </CardContent>
          </Card>
          <Card elevation={4}>
            <CardContent>
              <CardMedia
                sx={{ padding: 2 }}
                component="img"
                image="/images/placeholder/drone-placeholder.png"
                alt="Thumbnail"
                height="250"
              />
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Big Drone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Seller
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
                  startIcon={<AirplanemodeActiveIcon></AirplanemodeActiveIcon>}
                  variant="contained"
                >
                  More Details
                </Button>
                <Button
                  fullWidth
                  startIcon={<ClearIcon></ClearIcon>}
                  variant="contained"
                  sx={{ marginLeft: 0 }}
                  onClick={() => handleOpenDialog("Big Drone")}
                >
                  Delete Listing
                </Button>
              </Stack>
            </CardContent>
          </Card>
          <Card elevation={4}>
            <CardContent>
              <CardMedia
                sx={{ padding: 2 }}
                component="img"
                image="/images/placeholder/drone-placeholder.png"
                alt="Thumbnail"
                height="250"
              />
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Big Drone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Seller
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
                  startIcon={<AirplanemodeActiveIcon></AirplanemodeActiveIcon>}
                  variant="contained"
                >
                  More Details
                </Button>
                <Button
                  fullWidth
                  startIcon={<ClearIcon></ClearIcon>}
                  variant="contained"
                  sx={{ marginLeft: 0 }}
                  onClick={() => handleOpenDialog("Big Drone")}
                >
                  Delete Listing
                </Button>
              </Stack>
            </CardContent>
          </Card>
          <Card elevation={4}>
            <CardContent>
              <CardMedia
                sx={{ padding: 2 }}
                component="img"
                image="/images/placeholder/drone-placeholder.png"
                alt="Thumbnail"
                height="250"
              />
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Big Drone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Seller
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
                  startIcon={<AirplanemodeActiveIcon></AirplanemodeActiveIcon>}
                  variant="contained"
                >
                  More Details
                </Button>
                <Button
                  fullWidth
                  startIcon={<ClearIcon></ClearIcon>}
                  variant="contained"
                  sx={{ marginLeft: 0 }}
                  onClick={() => handleOpenDialog("Big Drone")}
                >
                  Delete Listing
                </Button>
              </Stack>
            </CardContent>
          </Card>
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
              xl: "repeat(5, 1fr)",
            },
            gap: 2,
          }}
        >
          <Card elevation={4}>
            <CardContent>
              <CardMedia
                sx={{ padding: 2 }}
                component="img"
                image="/images/placeholder/drone-placeholder.png"
                alt="Thumbnail"
                height="250"
              />
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Big Drone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Seller
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
                  startIcon={<AirplanemodeActiveIcon></AirplanemodeActiveIcon>}
                  variant="contained"
                >
                  More Details
                </Button>
                <Button
                  fullWidth
                  startIcon={<ClearIcon></ClearIcon>}
                  variant="contained"
                  sx={{ marginLeft: 0 }}
                  onClick={() => handleOpenDialog("Big Drone")}
                >
                  Delete Listing
                </Button>
              </Stack>
            </CardContent>
          </Card>
          <Card elevation={4}>
            <CardContent>
              <CardMedia
                sx={{ padding: 2 }}
                component="img"
                image="/images/placeholder/drone-placeholder.png"
                alt="Thumbnail"
                height="250"
              />
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Big Drone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Seller
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
                  startIcon={<AirplanemodeActiveIcon></AirplanemodeActiveIcon>}
                  variant="contained"
                >
                  More Details
                </Button>
                <Button
                  fullWidth
                  startIcon={<ClearIcon></ClearIcon>}
                  variant="contained"
                  sx={{ marginLeft: 0 }}
                  onClick={() => handleOpenDialog("Big Drone")}
                >
                  Delete Listing
                </Button>
              </Stack>
            </CardContent>
          </Card>
          <Card elevation={4}>
            <CardContent>
              <CardMedia
                sx={{ padding: 2 }}
                component="img"
                image="/images/placeholder/drone-placeholder.png"
                alt="Thumbnail"
                height="250"
              />
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Big Drone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Seller
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
                  startIcon={<AirplanemodeActiveIcon></AirplanemodeActiveIcon>}
                  variant="contained"
                >
                  More Details
                </Button>
                <Button
                  fullWidth
                  startIcon={<ClearIcon></ClearIcon>}
                  variant="contained"
                  sx={{ marginLeft: 0 }}
                  onClick={() => handleOpenDialog("Big Drone")}
                >
                  Delete Listing
                </Button>
              </Stack>
            </CardContent>
          </Card>
          <Card elevation={4}>
            <CardContent>
              <CardMedia
                sx={{ padding: 2 }}
                component="img"
                image="/images/placeholder/drone-placeholder.png"
                alt="Thumbnail"
                height="250"
              />
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Big Drone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Seller
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
                  startIcon={<AirplanemodeActiveIcon></AirplanemodeActiveIcon>}
                  variant="contained"
                >
                  More Details
                </Button>
                <Button
                  fullWidth
                  startIcon={<ClearIcon></ClearIcon>}
                  variant="contained"
                  sx={{ marginLeft: 0 }}
                  onClick={() => handleOpenDialog("Big Drone")}
                >
                  Delete Listing
                </Button>
              </Stack>
            </CardContent>
          </Card>
          <Card elevation={4}>
            <CardContent>
              <CardMedia
                sx={{ padding: 2 }}
                component="img"
                image="/images/placeholder/drone-placeholder.png"
                alt="Thumbnail"
                height="250"
              />
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Big Drone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Seller
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
                  startIcon={<AirplanemodeActiveIcon></AirplanemodeActiveIcon>}
                  variant="contained"
                >
                  More Details
                </Button>
                <Button
                  fullWidth
                  startIcon={<ClearIcon></ClearIcon>}
                  variant="contained"
                  sx={{ marginLeft: 0 }}
                  onClick={() => handleOpenDialog("Big Drone")}
                >
                  Delete Listing
                </Button>
              </Stack>
            </CardContent>
          </Card>
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
              xl: "repeat(5, 1fr)",
            },
            gap: 2,
          }}
        >
          <Card elevation={4}>
            <CardContent>
              <CardMedia
                sx={{ padding: 2 }}
                component="img"
                image="/images/placeholder/drone-placeholder.png"
                alt="Thumbnail"
                height="250"
              />
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Big Drone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Seller
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
                  startIcon={<AirplanemodeActiveIcon></AirplanemodeActiveIcon>}
                  variant="contained"
                >
                  More Details
                </Button>
                <Button
                  fullWidth
                  startIcon={<ClearIcon></ClearIcon>}
                  variant="contained"
                  sx={{ marginLeft: 0 }}
                  onClick={() => handleOpenDialog("Big Drone")}
                >
                  Delete Listing
                </Button>
              </Stack>
            </CardContent>
          </Card>
          <Card elevation={4}>
            <CardContent>
              <CardMedia
                sx={{ padding: 2 }}
                component="img"
                image="/images/placeholder/drone-placeholder.png"
                alt="Thumbnail"
                height="250"
              />
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Big Drone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Seller
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
                  startIcon={<AirplanemodeActiveIcon></AirplanemodeActiveIcon>}
                  variant="contained"
                >
                  More Details
                </Button>
                <Button
                  fullWidth
                  startIcon={<ClearIcon></ClearIcon>}
                  variant="contained"
                  sx={{ marginLeft: 0 }}
                  onClick={() => handleOpenDialog("Big Drone")}
                >
                  Delete Listing
                </Button>
              </Stack>
            </CardContent>
          </Card>
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
              xl: "repeat(5, 1fr)",
            },
            gap: 2,
          }}
        >
          <Card elevation={4}>
            <CardContent>
              <CardMedia
                sx={{ padding: 2 }}
                component="img"
                image="/images/placeholder/drone-placeholder.png"
                alt="Thumbnail"
                height="250"
              />
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Big Drone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Seller
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
                  startIcon={<AirplanemodeActiveIcon></AirplanemodeActiveIcon>}
                  variant="contained"
                >
                  More Details
                </Button>
                <Button
                  fullWidth
                  startIcon={<ClearIcon></ClearIcon>}
                  variant="contained"
                  sx={{ marginLeft: 0 }}
                  onClick={() => handleOpenDialog("Big Drone")}
                >
                  Delete Listing
                </Button>
              </Stack>
            </CardContent>
          </Card>
          <Card elevation={4}>
            <CardContent>
              <CardMedia
                sx={{ padding: 2 }}
                component="img"
                image="/images/placeholder/drone-placeholder.png"
                alt="Thumbnail"
                height="250"
              />
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Big Drone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Seller
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
                  startIcon={<AirplanemodeActiveIcon></AirplanemodeActiveIcon>}
                  variant="contained"
                >
                  More Details
                </Button>
                <Button
                  fullWidth
                  startIcon={<ClearIcon></ClearIcon>}
                  variant="contained"
                  sx={{ marginLeft: 0 }}
                  onClick={() => handleOpenDialog("Big Drone")}
                >
                  Delete Listing
                </Button>
              </Stack>
            </CardContent>
          </Card>
          <Card elevation={4}>
            <CardContent>
              <CardMedia
                sx={{ padding: 2 }}
                component="img"
                image="/images/placeholder/drone-placeholder.png"
                alt="Thumbnail"
                height="250"
              />
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Big Drone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Seller
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
                  startIcon={<AirplanemodeActiveIcon></AirplanemodeActiveIcon>}
                  variant="contained"
                >
                  More Details
                </Button>
                <Button
                  fullWidth
                  startIcon={<ClearIcon></ClearIcon>}
                  variant="contained"
                  sx={{ marginLeft: 0 }}
                  onClick={() => handleOpenDialog("Big Drone")}
                >
                  Delete Listing
                </Button>
              </Stack>
            </CardContent>
          </Card>
          <Card elevation={4}>
            <CardContent>
              <CardMedia
                sx={{ padding: 2 }}
                component="img"
                image="/images/placeholder/drone-placeholder.png"
                alt="Thumbnail"
                height="250"
              />
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Big Drone
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                color="primary"
                textAlign="left"
              >
                Seller
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
                  startIcon={<AirplanemodeActiveIcon></AirplanemodeActiveIcon>}
                  variant="contained"
                >
                  More Details
                </Button>
                <Button
                  fullWidth
                  startIcon={<ClearIcon></ClearIcon>}
                  variant="contained"
                  sx={{ marginLeft: 0 }}
                  onClick={() => handleOpenDialog("Big Drone")}
                >
                  Delete Listing
                </Button>
              </Stack>
            </CardContent>
          </Card>
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
              <Button variant="contained" color="error">
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
