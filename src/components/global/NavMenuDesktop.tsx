import React from "react";
import { Stack, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

function NavMenuDesktop() {
  return (
    <Stack direction="row" spacing={4} display={{ xs: "none", md: "block" }}>
      <Button
        disableRipple
        href="#"
        color="inherit"
        size="large"
        sx={{ backgroundColor: "transparent" }}
      >
        Drones
      </Button>
      <Button
        disableRipple
        href="#"
        color="inherit"
        size="large"
        sx={{ backgroundColor: "transparent" }}
      >
        Planes
      </Button>
      <Button
        disableRipple
        href="#"
        color="inherit"
        size="large"
        sx={{ backgroundColor: "transparent" }}
      >
        Helicopters
      </Button>
      <Button
        disableRipple
        href="#"
        color="inherit"
        size="large"
        sx={{ backgroundColor: "transparent" }}
      >
        Other
      </Button>
      <Button
        disableRipple
        size="large"
        color="inherit"
        sx={{ gap: 2, backgroundColor: "transparent" }}
        endIcon={<PersonIcon />}
      >
        Log In
      </Button>
    </Stack>
  );
}

export default NavMenuDesktop;
