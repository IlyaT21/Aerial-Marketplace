import { Stack } from "@mui/material";
import React from "react";
import EditProfile from "../components/buyer/EditProfile";

function UserProfile() {
  return (
    <Stack
      direction="column"
      gap={4}
      py={8}
      px={4}
      width="100%"
      maxWidth="1400px"
    >
      <EditProfile />
    </Stack>
  );
}

export default UserProfile;
