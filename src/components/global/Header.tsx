import { AppBar, Toolbar, Button } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";
import { useState } from "react";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  const handleLogin = (role: string | null) => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
  };
  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Button
          disableRipple
          size="large"
          color="inherit"
          sx={{ gap: 2, backgroundColor: "transparent" }}
          startIcon={<FlightTakeoffIcon />}
        >
          Sky Riders
        </Button>
        <NavMenuDesktop
          isLoggedIn={isLoggedIn}
          userRole={userRole}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
        />
        <NavMenuMobile
          isLoggedIn={isLoggedIn}
          userRole={userRole}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
        />
      </Toolbar>
    </AppBar>
  );
};
