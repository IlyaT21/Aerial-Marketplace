import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import PersonIcon from "@mui/icons-material/Person";
import ClearIcon from "@mui/icons-material/Clear";

interface User {
  firstName: string;
  lastName: string;
}

function UserList() {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleOpenDialog = (firstName: string, lastName: string) => {
    setSelectedUser({ firstName, lastName });
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedUser(null);
  };
  return (
    <Stack gap={8}>
      <Stack>
        <Typography textAlign="left" variant="h4" gutterBottom>
          Admins:
        </Typography>
        <Stack gap={2}>
          <Grid
            display="flex"
            alignItems="center"
            gap={{ xs: 2, md: 4 }}
            justifyContent="space-between"
            padding={2}
            sx={{
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: 2,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              width={{ xs: "100%", sm: "auto" }}
              gap={2}
            >
              <Typography variant="body1">First Name</Typography>
              <Typography variant="body1">Last Name</Typography>
              <Button
                href="mailto:user@email.com"
                sx={{ padding: { xs: 0, md: "6px" } }}
              >
                user@email.com
              </Button>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              gap={2}
              sx={{
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Button
                variant="contained"
                startIcon={<PersonIcon></PersonIcon>}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                More Details
              </Button>
              <Button
                variant="contained"
                startIcon={<ClearIcon></ClearIcon>}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
                onClick={() => handleOpenDialog("First Name", "Last Name")}
              >
                Delete User
              </Button>
            </Stack>
          </Grid>
          <Grid
            display="flex"
            alignItems="center"
            gap={{ xs: 2, md: 4 }}
            justifyContent="space-between"
            padding={2}
            sx={{
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: 2,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              width={{ xs: "100%", sm: "auto" }}
              gap={2}
            >
              <Typography variant="body1">First Name</Typography>
              <Typography variant="body1">Last Name</Typography>
              <Button
                href="mailto:user@email.com"
                sx={{ padding: { xs: 0, md: "6px" } }}
              >
                user@email.com
              </Button>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              gap={2}
              sx={{
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Button
                variant="contained"
                startIcon={<PersonIcon></PersonIcon>}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                More Details
              </Button>
              <Button
                variant="contained"
                startIcon={<ClearIcon></ClearIcon>}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
                onClick={() => handleOpenDialog("First Name", "Last Name")}
              >
                Delete User
              </Button>
            </Stack>
          </Grid>
          <Grid
            display="flex"
            alignItems="center"
            gap={{ xs: 2, md: 4 }}
            justifyContent="space-between"
            padding={2}
            sx={{
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: 2,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              width={{ xs: "100%", sm: "auto" }}
              gap={2}
            >
              <Typography variant="body1">First Name</Typography>
              <Typography variant="body1">Last Name</Typography>
              <Button
                href="mailto:user@email.com"
                sx={{ padding: { xs: 0, md: "6px" } }}
              >
                user@email.com
              </Button>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              gap={2}
              sx={{
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Button
                variant="contained"
                startIcon={<PersonIcon></PersonIcon>}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                More Details
              </Button>
              <Button
                variant="contained"
                startIcon={<ClearIcon></ClearIcon>}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
                onClick={() => handleOpenDialog("First Name", "Last Name")}
              >
                Delete User
              </Button>
            </Stack>
          </Grid>
        </Stack>
      </Stack>
      <Stack>
        <Typography textAlign="left" variant="h4" gutterBottom>
          Sellers:
        </Typography>
        <Stack gap={2}>
          <Grid
            display="flex"
            alignItems="center"
            gap={{ xs: 2, md: 4 }}
            justifyContent="space-between"
            padding={2}
            sx={{
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: 2,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              width={{ xs: "100%", sm: "auto" }}
              gap={2}
            >
              <Typography variant="body1">First Name</Typography>
              <Typography variant="body1">Last Name</Typography>
              <Button
                href="mailto:user@email.com"
                sx={{ padding: { xs: 0, md: "6px" } }}
              >
                user@email.com
              </Button>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              gap={2}
              sx={{
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Button
                variant="contained"
                startIcon={<PersonIcon></PersonIcon>}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                More Details
              </Button>
              <Button
                variant="contained"
                startIcon={<ClearIcon></ClearIcon>}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
                onClick={() => handleOpenDialog("First Name", "Last Name")}
              >
                Delete User
              </Button>
            </Stack>
          </Grid>
          <Grid
            display="flex"
            alignItems="center"
            gap={{ xs: 2, md: 4 }}
            justifyContent="space-between"
            padding={2}
            sx={{
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: 2,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              width={{ xs: "100%", sm: "auto" }}
              gap={2}
            >
              <Typography variant="body1">First Name</Typography>
              <Typography variant="body1">Last Name</Typography>
              <Button
                href="mailto:user@email.com"
                sx={{ padding: { xs: 0, md: "6px" } }}
              >
                user@email.com
              </Button>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              gap={2}
              sx={{
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Button
                variant="contained"
                startIcon={<PersonIcon></PersonIcon>}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                More Details
              </Button>
              <Button
                variant="contained"
                startIcon={<ClearIcon></ClearIcon>}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
                onClick={() => handleOpenDialog("First Name", "Last Name")}
              >
                Delete User
              </Button>
            </Stack>
          </Grid>
          <Grid
            display="flex"
            alignItems="center"
            gap={{ xs: 2, md: 4 }}
            justifyContent="space-between"
            padding={2}
            sx={{
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: 2,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              width={{ xs: "100%", sm: "auto" }}
              gap={2}
            >
              <Typography variant="body1">First Name</Typography>
              <Typography variant="body1">Last Name</Typography>
              <Button
                href="mailto:user@email.com"
                sx={{ padding: { xs: 0, md: "6px" } }}
              >
                user@email.com
              </Button>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              gap={2}
              sx={{
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Button
                variant="contained"
                startIcon={<PersonIcon></PersonIcon>}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                More Details
              </Button>
              <Button
                variant="contained"
                startIcon={<ClearIcon></ClearIcon>}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
                onClick={() => handleOpenDialog("First Name", "Last Name")}
              >
                Delete User
              </Button>
            </Stack>
          </Grid>
        </Stack>
      </Stack>
      <Stack>
        <Typography textAlign="left" variant="h4" gutterBottom>
          Buyers:
        </Typography>
        <Stack gap={2}>
          <Grid
            display="flex"
            alignItems="center"
            gap={{ xs: 2, md: 4 }}
            justifyContent="space-between"
            padding={2}
            sx={{
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: 2,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              width={{ xs: "100%", sm: "auto" }}
              gap={2}
            >
              <Typography variant="body1">First Name</Typography>
              <Typography variant="body1">Last Name</Typography>
              <Button
                href="mailto:user@email.com"
                sx={{ padding: { xs: 0, md: "6px" } }}
              >
                user@email.com
              </Button>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              gap={2}
              sx={{
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Button
                variant="contained"
                startIcon={<PersonIcon></PersonIcon>}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                More Details
              </Button>
              <Button
                variant="contained"
                startIcon={<ClearIcon></ClearIcon>}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
                onClick={() => handleOpenDialog("First Name", "Last Name")}
              >
                Delete User
              </Button>
            </Stack>
          </Grid>
          <Grid
            display="flex"
            alignItems="center"
            gap={{ xs: 2, md: 4 }}
            justifyContent="space-between"
            padding={2}
            sx={{
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: 2,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              width={{ xs: "100%", sm: "auto" }}
              gap={2}
            >
              <Typography variant="body1">First Name</Typography>
              <Typography variant="body1">Last Name</Typography>
              <Button
                href="mailto:user@email.com"
                sx={{ padding: { xs: 0, md: "6px" } }}
              >
                user@email.com
              </Button>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              gap={2}
              sx={{
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Button
                variant="contained"
                startIcon={<PersonIcon></PersonIcon>}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                More Details
              </Button>
              <Button
                variant="contained"
                startIcon={<ClearIcon></ClearIcon>}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
                onClick={() => handleOpenDialog("First Name", "Last Name")}
              >
                Delete User
              </Button>
            </Stack>
          </Grid>
          <Grid
            display="flex"
            alignItems="center"
            gap={{ xs: 2, md: 4 }}
            justifyContent="space-between"
            padding={2}
            sx={{
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: 2,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              width={{ xs: "100%", sm: "auto" }}
              gap={2}
            >
              <Typography variant="body1">First Name</Typography>
              <Typography variant="body1">Last Name</Typography>
              <Button
                href="mailto:user@email.com"
                sx={{ padding: { xs: 0, md: "6px" } }}
              >
                user@email.com
              </Button>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              gap={2}
              sx={{
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Button
                variant="contained"
                startIcon={<PersonIcon></PersonIcon>}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                More Details
              </Button>
              <Button
                variant="contained"
                startIcon={<ClearIcon></ClearIcon>}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
                onClick={() => handleOpenDialog("First Name", "Last Name")}
              >
                Delete User
              </Button>
            </Stack>
          </Grid>
        </Stack>
        <Dialog open={open} onClose={handleCloseDialog}>
          <DialogTitle textAlign="center">Delete User</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete {selectedUser?.firstName}{" "}
              {selectedUser?.lastName}?
            </DialogContentText>
            <Stack
              alignItems="center"
              justifyContent="center"
              flexDirection="row"
              gap={2}
              my={4}
            >
              <Button variant="contained" color="error">
                Delete User
              </Button>
              <Button
                onClick={() => setOpen(false)}
                variant="contained"
                color="primary"
              >
                Cancel
              </Button>
            </Stack>
          </DialogContent>
        </Dialog>
      </Stack>
    </Stack>
  );
}

export default UserList;
