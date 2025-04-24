import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid2";
import { Box, Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
import ListingCard from "../listing/ListingCard";

function SellerListings() {
  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limit = 12;

  useEffect(() => {
    const loadFirstPage = async () => {
      try {
        const endpoint = `http://localhost:5000/api/products`;
        const { data } = await axios.get(endpoint);
        setProducts(data.products);
        setHasMore(data.products.length === limit);
      } catch (err) {
        console.error(err);
      }
    };
    loadFirstPage();
  }, []);

  const handleLoadMore = async () => {
    const next = page + 1;
    try {
      const endpoint = `http://localhost:5000/api/products`;
      const { data } = await axios.get(endpoint);

      setProducts((prev) => [...prev, ...data.products]);
      setHasMore(data.products.length === limit);
      setPage(next);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Stack
      paddingLeft={4}
      paddingRight={4}
      paddingBottom={4}
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
        {hasMore && (
          <Button
            sx={{ my: 4 }}
            size="large"
            variant="contained"
            onClick={handleLoadMore}
          >
            Load more
          </Button>
        )}
      </Box>
    </Stack>
  );
};

export default SellerListings;
