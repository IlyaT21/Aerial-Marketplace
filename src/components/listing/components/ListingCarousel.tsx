import { Box, Grid2 } from "@mui/material";
import React, { Component } from "react";

export class ListingCarousel extends Component {
  render() {
    return (
      <Grid2
        display="flex"
        direction="row"
        width={{ xs: "100%", sm: "75%", md: "50%" }}
      >
        <Box
          component="img"
          src="/images/placeholder/drone-placeholder.png"
          alt="Product"
          sx={{
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Grid2>
    );
  }
}

export default ListingCarousel;
