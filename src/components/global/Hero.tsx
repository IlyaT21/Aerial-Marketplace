import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function Hero() {
  return (
    <Stack
      minHeight="60vh"
      width="100%"
      alignItems="center"
      justifyContent="center"
      paddingLeft={4}
      paddingRight={4}
      sx={{
        backgroundImage: 'url("/images/placeholder/hero-placeholder.jpg")',
        backgroundSize: "cover",
        marginBottom: 12,
      }}
    >
      <Stack
        maxWidth="1024px"
        sx={{ background: "#FFFFFF66" }}
        borderRadius={4}
        padding={4}
      >
        <Typography
          variant="h1"
          gutterBottom
          color="inherit"
          sx={{ fontSize: { xs: "3rem", md: "5rem" } }}
        >
          Page Title
        </Typography>
        <Typography variant="body1">
          Page subtitle - Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Ratione veniam similique corrupti quaerat commodi consectetur
          repellat eius minus quod culpa dolores non exercitationem mollitia aut
          vel, assumenda officiis illum. Nostrum.
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Hero;
