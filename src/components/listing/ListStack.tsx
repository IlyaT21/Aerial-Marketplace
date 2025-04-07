import { useEffect, useState } from "react";
import axios from "axios";
import ListingCard from "./ListingCard";
import Grid from "@mui/material/Grid2";
import { Box, Stack } from "@mui/system";
import { Button } from "@mui/material";

function ListStack() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/products");
        console.log("Fetched products:", data);

        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Stack
      paddingLeft={4}
      paddingRight={4}
      width="100%"
      sx={{ maxWidth: "1400px" }}
    >
      <Grid width="100%" container spacing={4}>
        {products.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product._id}>
            <ListingCard product={product}></ListingCard>
          </Grid>
        ))}
      </Grid>
      <Box>
        <Button sx={{ my: 4 }} size="large" variant="contained">
          Load more
        </Button>
      </Box>
    </Stack>
  );
}

export default ListStack;
