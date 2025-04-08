import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

type HeroData = {
  title: string;
  description: string;
};

interface HeroProps {
  heroData: HeroData;
}

export const Hero: React.FC<HeroProps> = ({ heroData }) => {
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
          {heroData.title}
        </Typography>
        <Typography variant="body1">{heroData.description}</Typography>
      </Stack>
    </Stack>
  );
};

export default Hero;
