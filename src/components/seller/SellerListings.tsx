import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid2";
import { Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
import ListingCard from "../listing/ListingCard";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function SellerListings() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    const loadFirstPage = async () => {
      try {
        const decodedToken = jwtDecode<{ id: string }>(token);
        const userId = decodedToken.id;

        const endpoint = `http://localhost:5000/api/products?userId=${userId}`;
        const { data } = await axios.get(endpoint);
        setProducts(data.products);
      } catch (err) {
        console.error(err);
      }
    };
    loadFirstPage();
  }, []);

  return (
    <Stack
      paddingLeft={{ xs: 0, lg: 4 }}
      paddingRight={{ xs: 0, lg: 4 }}
      paddingBottom={4}
      width="100%"
      sx={{ maxWidth: "1400px" }}
    >
      <Stack
        direction={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
        pb={{ xs: 4, lg: 0 }}
      >
        <Typography variant="h3" component="h2" gutterBottom>
          Active Listings
        </Typography>
        <Button
          component={Link}
          to="/add-product"
          variant="contained"
          size="large"
        >
          Add Product
        </Button>
      </Stack>

      <Grid width="100%" container spacing={4}>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid size={{ xs: 12, lg: 6 }} key={product._id}>
              <ListingCard product={product} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6">No products found.</Typography>
        )}
      </Grid>
    </Stack>
  );
}

export default SellerListings;
