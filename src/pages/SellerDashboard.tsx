import { Stack } from "@mui/material";
import EditProfile from "../components/buyer/EditProfile";
import SellerListings from "../components/seller/SellerListings";

function SellerDashboard() {
  return (
    <Stack
      direction="column"
      gap={4}
      py={8}
      px={4}
      width="100%"
      maxWidth="1400px"
    >
      <Stack direction="row" justifyContent="space-between" width="100%">
        <Stack width="40%">
          <EditProfile />
        </Stack>
        <Stack width="60%">
          <SellerListings />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SellerDashboard;
