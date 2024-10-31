import { Stack } from "@mui/system";
import React from "react";
import UserList from "../components/admin/UserList";
import ProductList from "../components/admin/ProductList";

function AdminDashboard() {
  return (
    <Stack
      direction="column"
      gap={4}
      py={8}
      px={4}
      width="100%"
      maxWidth="1400px"
    >
      <UserList></UserList>
      <ProductList></ProductList>
    </Stack>
  );
}

export default AdminDashboard;
