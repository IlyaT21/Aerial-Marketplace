import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function Hero() {
  return (
    <Stack>
      <Typography variant="h1">Page Title</Typography>
      <Typography>
        Page subtitle - Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ratione veniam similique corrupti quaerat commodi consectetur
        repellat eius minus quod culpa dolores non exercitationem mollitia aut
        vel, assumenda officiis illum. Nostrum.
      </Typography>
    </Stack>
  );
}

export default Hero;
