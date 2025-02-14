import { AppBar, Toolbar, Button } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";
import { useState } from "react";

interface HeaderProps {
  token: string | null;
}

export const Header: React.FC<HeaderProps> = ({ token }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  const handleLogin = (role: string | null) => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserRole(null);
    window.location.reload();
  };
  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Button
          disableRipple
          href="/"
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
          handleLogout={handleLogout}
          token={token}
        />
        <NavMenuMobile
          isLoggedIn={isLoggedIn}
          userRole={userRole}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
          token={token}
        />
      </Toolbar>
    </AppBar>
  );
};
