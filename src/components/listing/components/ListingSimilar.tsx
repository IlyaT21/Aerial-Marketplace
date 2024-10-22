import { Stack } from "@mui/system";
import Grid from "@mui/material/Grid2";
import React from "react";
import ListingCard from "../ListingCard";
import { Typography } from "@mui/material";

function ListingSimilar() {
  return (
    <Stack pb={{xs: 4, md: 8}} paddingLeft={4} paddingRight={4} sx={{ maxWidth: "1400px" }}>
      <Typography variant="h4" gutterBottom>
        Similar Craft
      </Typography>
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
      </Grid>
    </Stack>
  );
}

export default ListingSimilar;
