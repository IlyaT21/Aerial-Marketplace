import { AppBar, Toolbar, IconButton, Stack, Button } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import PersonIcon from "@mui/icons-material/Person";

export const Header = () => {
  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton disableFocusRipple color="inherit">
          <FlightTakeoffIcon /> Sky Riders
        </IconButton>
        <Stack direction="row" spacing={4}>
          <Button href="#" color="inherit" size="large">
            Drones
          </Button>
          <Button href="#" color="inherit" size="large">
            Planes
          </Button>
          <Button href="#" color="inherit" size="large">
            Helicopters
          </Button>
          <Button href="#" color="inherit" size="large">
            Other
          </Button>
          <IconButton disableFocusRipple color="inherit">
            Log In
            <PersonIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
