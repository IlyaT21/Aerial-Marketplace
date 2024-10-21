import React from "react";
import ListingCard from "./ListingCard";
import Grid from "@mui/material/Grid2";
import { Box, Stack } from "@mui/system";
import { Button } from "@mui/material";

function ListStack() {
  return (
    <Stack paddingLeft={4} paddingRight={4} sx={{ maxWidth: "1400px" }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ListingCard></ListingCard>
        </Grid>
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
