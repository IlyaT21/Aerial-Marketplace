import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import PersonIcon from "@mui/icons-material/Person";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";

interface User {
  firstName: string;
  lastName: string;
  id: string;
}

function UserList() {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [sellers, setSellers] = useState([]);
  const [buyers, setBuyers] = useState([]);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/users");
        const sellers = data.filter((user: any) => user.role === "seller");
        const buyers = data.filter((user: any) => user.role === "buyer");
        const admins = data.filter((user: any) => user.role === "admin");
        setSellers(sellers);
        setBuyers(buyers);
        setAdmins(admins);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching users:", error.message);
        } else {
          console.error("An unknown error occurred");
        }
      }
    };

    fetchUsers();
  }, []);

  const handleOpenDialog = (
    firstName: string,
    lastName: string,
    id: string
  ) => {
    setSelectedUser({ firstName, lastName, id });
    console.log(selectedUser);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  const handleDeleteUser = async () => {
    if (!selectedUser) {
      console.error("No user selected for deletion");
      return;
    }

    try {
      await axios.delete(
        `http://localhost:5000/api/users/delete/${selectedUser.id}`
      );
      setOpen(false);
      setSelectedUser(null);

      // Re-fetch users to update lists
      const { data } = await axios.get("http://localhost:5000/api/users");
      setSellers(data.filter((user: any) => user.role === "seller"));
      setBuyers(data.filter((user: any) => user.role === "buyer"));
      setAdmins(data.filter((user: any) => user.role === "admin"));
    } catch (error: any) {
      console.error("Error deleting user:", error);

      const message =
        error.response?.data?.message ||
        "An unexpected error occurred while deleting the user.";

      alert(message);
    }
  };

  return (
    <Stack gap={8}>
      <Stack>
        <Typography textAlign="left" variant="h4" gutterBottom>
          Admins:
        </Typography>
        <Stack gap={2}>
          {admins.length > 0 ? (
            admins.map((admin: any) => (
              <Grid
                key={admin._id}
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
                  <Typography variant="body1">{admin.firstName}</Typography>
                  <Typography variant="body1">{admin.lastName}</Typography>
                  <Button
                    href={`mailto:${admin.email}`}
                    sx={{ padding: { xs: 0, md: "6px" } }}
                  >
                    {admin.email}
                  </Button>
                </Stack>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  alignItems="center"
                  gap={2}
                  sx={{
                    width: { xs: "100%", sm: "auto" },
                  }}
                ></Stack>
              </Grid>
            ))
          ) : (
            <Typography variant="h5" sx={{ textAlign: "center", marginTop: 2 }}>
              No users found
            </Typography>
          )}
        </Stack>
      </Stack>
      <Stack>
        <Typography textAlign="left" variant="h4" gutterBottom>
          Sellers:
        </Typography>
        <Stack gap={2}>
          {sellers.length > 0 ? (
            sellers.map((seller: any) => (
              <Grid
                key={seller._id}
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
                  <Typography variant="body1">{seller.firstName}</Typography>
                  <Typography variant="body1">{seller.lastName}</Typography>
                  <Button
                    href={`mailto:${seller.email}`}
                    sx={{ padding: { xs: 0, md: "6px" } }}
                  >
                    {seller.email}
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
                    component={Link}
                    to={`/edit-user/${seller._id}`}
                    sx={{
                      width: { xs: "100%", sm: "auto" },
                    }}
                  >
                    Edit User
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<ClearIcon></ClearIcon>}
                    sx={{
                      width: { xs: "100%", sm: "auto" },
                    }}
                    onClick={() =>
                      handleOpenDialog(
                        seller.firstName,
                        seller.lastName,
                        seller._id
                      )
                    }
                  >
                    Delete User
                  </Button>
                </Stack>
              </Grid>
            ))
          ) : (
            <Typography variant="h5" sx={{ textAlign: "center", marginTop: 2 }}>
              No users found
            </Typography>
          )}
        </Stack>
      </Stack>
      <Stack>
        <Typography textAlign="left" variant="h4" gutterBottom>
          Buyers:
        </Typography>
        <Stack gap={2}>
          {buyers.length > 0 ? (
            buyers.map((buyer: any) => (
              <Grid
                key={buyer._id}
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
                  <Typography variant="body1">{buyer.firstName}</Typography>
                  <Typography variant="body1">{buyer.lastName}</Typography>
                  <Button
                    href={`mailto:${buyer.email}`}
                    sx={{ padding: { xs: 0, md: "6px" } }}
                  >
                    {buyer.email}
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
                    component={Link}
                    to={`/edit-user/${buyer._id}`}
                    sx={{
                      width: { xs: "100%", sm: "auto" },
                    }}
                  >
                    Edit User
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<ClearIcon></ClearIcon>}
                    sx={{
                      width: { xs: "100%", sm: "auto" },
                    }}
                    onClick={() =>
                      handleOpenDialog(
                        buyer.firstName,
                        buyer.lastName,
                        buyer._id
                      )
                    }
                  >
                    Delete User
                  </Button>
                </Stack>
              </Grid>
            ))
          ) : (
            <Typography variant="h5" sx={{ textAlign: "center", marginTop: 2 }}>
              No users found
            </Typography>
          )}
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
              <Button
                variant="contained"
                color="error"
                onClick={handleDeleteUser}
              >
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
