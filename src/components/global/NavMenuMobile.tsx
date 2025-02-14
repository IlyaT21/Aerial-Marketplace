import { Stack, IconButton, Drawer, Button } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

interface NavMenuMobileProps {
  isLoggedIn: boolean;
  userRole: string | null;
  handleLogin: (role: string) => void;
  handleLogout: () => void;
  token: string | null;
}

function NavMenuMobile({
  isLoggedIn,
  userRole,
  handleLogin,
  handleLogout,
  token,
}: NavMenuMobileProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (token) {
    const decodedToken = jwtDecode<{ id: string; role: string }>(token);
    userRole = decodedToken.role;
  }

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
        <Stack spacing={4} alignItems="flex-start" my="auto">
          <Button
            disableRipple
            href="#"
            color="inherit"
            size="large"
            sx={{ backgroundColor: "transparent" }}
          >
            All
          </Button>
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
          {token ? (
            <Button
              disableRipple
              size="large"
              color="inherit"
              sx={{ gap: 2, backgroundColor: "transparent" }}
              endIcon={<PersonIcon />}
              onClick={() => handleLogout()}
            >
              Log Out
            </Button>
          ) : (
            <Button
              disableRipple
              size="large"
              color="inherit"
              sx={{ gap: 2, backgroundColor: "transparent" }}
              endIcon={<PersonIcon />}
              href="/login"
            >
              Log In
            </Button>
          )}
        </Stack>
      </Drawer>
    </Stack>
  );
}

export default NavMenuMobile;
