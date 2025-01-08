import React from "react";
import UserEdit from "../components/admin/UserEdit";
import { Stack } from "@mui/material";

function EditUser() {
  window.addEventListener("beforeunload", function (event) {
    event.stopImmediatePropagation();
  });

  return (
    <Stack
      justifyContent={{
        xs: "flex-start",
        md: "center",
      }}
      gap={4}
      px={4}
      py={4}
      sx={{
        minHeight: {
          xs: "calc(100vh - 108px)",
          sm: "calc(100vh - 116px)",
          md: "calc(100vh - 132px)",
          width: "100%",
          maxWidth: "600px",
        },
      }}
    >
      <UserEdit></UserEdit>
    </Stack>
  );
}

export default EditUser;
