import { AppBar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <AppBar position="static">
      <Stack py={{ xs: 2, md: 3 }} sx={{ backgroundColor: "primary.main" }}>
        <Typography variant="body2">
          &copy; {currentYear} Sky Riders. All rights reserved.
        </Typography>
      </Stack>
    </AppBar>
  );
}

export default Footer;
