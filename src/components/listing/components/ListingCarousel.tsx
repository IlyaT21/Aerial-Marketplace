import { Box, Grid2 } from "@mui/material";
import { Stack } from "@mui/system";
import React, { Component } from "react";

export class ListingCarousel extends Component {
  render() {
    return (
      <Grid2
        display="flex"
        direction="row"
        width={{ xs: "100%", sm: "75%", md: "50%" }}
      >
        <Stack width="25%">
          <Box
            component="img"
            src="/images/placeholder/drone-placeholder.png"
            alt="Product"
          />
          <Box
            component="img"
            src="/images/placeholder/drone-placeholder.png"
            alt="Product"
          />
          <Box
            component="img"
            src="/images/placeholder/drone-placeholder.png"
            alt="Product"
          />
        </Stack>
        <Box
          component="img"
          src="/images/placeholder/drone-placeholder.png"
          alt="Product"
          sx={{
            width: "75%",
            objectFit: "cover",
          }}
        />
      </Grid2>
    );
  }
}

export default ListingCarousel;
