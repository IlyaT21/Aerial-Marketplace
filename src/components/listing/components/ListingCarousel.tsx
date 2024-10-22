import { Box, Grid2 } from "@mui/material";
import { Stack } from "@mui/system";
import React, { Component } from "react";

export class ListingCarousel extends Component {
  render() {
    return (
      <Grid2 display="flex" direction="row" width="50%">
        <Stack width="50%">
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
            width: "50%",
            objectFit: "cover",
          }}
        />
      </Grid2>
    );
  }
}

export default ListingCarousel;
