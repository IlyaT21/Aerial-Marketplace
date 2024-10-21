import { AppBar, Toolbar, Button } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";

export const Header = () => {
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
        <NavMenuDesktop />
        <NavMenuMobile />
      </Toolbar>
    </AppBar>
  );
};
