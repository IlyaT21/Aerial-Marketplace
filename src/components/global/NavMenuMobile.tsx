import { Stack, IconButton, Drawer, Button } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

function NavMenuMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Stack display={{ xs: "block", md: "none" }}>
      <IconButton color="inherit" onClick={() => setIsMenuOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <Stack spacing={4}>
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
      </Drawer>
    </Stack>
  );
}

export default NavMenuMobile;
