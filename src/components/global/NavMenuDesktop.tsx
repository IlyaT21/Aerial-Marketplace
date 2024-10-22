import React from "react";
import { Stack, Button, Menu, MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

interface NavMenuDesktopProps {
  isLoggedIn: boolean;
  userRole: string | null;
  handleLogin: (role: string) => void;
  handleLogout: () => void;
}

function NavMenuDesktop({
  isLoggedIn,
  userRole,
  handleLogin,
  handleLogout,
}: NavMenuDesktopProps) {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };
  return (
    <Stack
      direction="row"
      spacing={{ md: 3, lg: 4 }}
      display={{ xs: "none", md: "block" }}
    >
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
      {isLoggedIn ? (
        <>
          <Button
            id="toggleUserMenu"
            onClick={handleClick}
            disableRipple
            size="large"
            color="inherit"
            sx={{ gap: 2, backgroundColor: "transparent" }}
            endIcon={<PersonIcon />}
          >
            Menu
          </Button>
          <Menu
            id="userMenu"
            anchorEl={anchorElement}
            open={open}
            onClose={handleClose}
          >
            {userRole === "admin" && (
              <MenuItem>
                <Button
                  disableRipple
                  size="large"
                  color="inherit"
                  sx={{ backgroundColor: "transparent" }}
                >
                  Admin Dashboard
                </Button>
              </MenuItem>
            )}
            {userRole === "user" && (
              <MenuItem>
                <Button
                  disableRipple
                  size="large"
                  color="inherit"
                  sx={{ backgroundColor: "transparent" }}
                >
                  User Profile
                </Button>
              </MenuItem>
            )}
            {userRole === "vendor" && (
              <MenuItem>
                <Button
                  disableRipple
                  size="large"
                  color="inherit"
                  sx={{ backgroundColor: "transparent" }}
                >
                  Vendor Panel
                </Button>
              </MenuItem>
            )}
            <MenuItem>
              <Button
                onClick={handleLogout}
                disableRipple
                size="large"
                color="inherit"
                sx={{ backgroundColor: "transparent" }}
              >
                Log Out
              </Button>
            </MenuItem>
          </Menu>
        </>
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
  );
}

export default NavMenuDesktop;
