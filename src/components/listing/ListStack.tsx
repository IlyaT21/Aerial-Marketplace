import { useEffect, useState } from "react";
import axios from "axios";
import ListingCard from "./ListingCard";
import Grid from "@mui/material/Grid2";
import { Box, Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";

type ListStackProps = {
  category?: string;
};

const ListStack: React.FC<ListStackProps> = ({ category }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const endpoint = category
          ? `http://localhost:5000/api/products/category/${category}`
          : "http://localhost:5000/api/products";

        console.log(category);
        console.log(endpoint);

        const { data } = await axios.get(endpoint);
        console.log("Fetched products:", data);

        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <Stack
      paddingLeft={4}
      paddingRight={4}
      width="100%"
      sx={{ maxWidth: "1400px" }}
    >
      <Grid width="100%" container spacing={4}>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product._id}>
              <ListingCard product={product} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6">No products found.</Typography>
        )}
      </Grid>
      <Box>
        <Button sx={{ my: 4 }} size="large" variant="contained">
          Load more
        </Button>
      </Box>
    </Stack>
  );
};

export default ListStack;
