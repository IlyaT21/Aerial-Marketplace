import React from "react";
import ListingCard from "./ListingCard";
import Grid from "@mui/material/Grid2";
import { Box, Stack } from "@mui/system";
import { Button } from "@mui/material";

function ListStack() {
  return (
    <Stack sx={{ maxWidth: "1400px" }}>
      <Grid container spacing={4}>
        <Grid size={3}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={3}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={3}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={3}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={3}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={3}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={3}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={3}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={3}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={3}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={3}>
          <ListingCard></ListingCard>
        </Grid>
        <Grid size={3}>
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
