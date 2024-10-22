import { Stack } from "@mui/system";
import React from "react";
import ListingGeneralInfo from "./components/ListingGeneralInfo";
import ListingCarousel from "./components/ListingCarousel";

function ListingSingle() {
  return (
    <Stack paddingLeft={4} paddingRight={4} sx={{ maxWidth: "1400px" }}>
      <Stack direction="row" gap={4}>
        <ListingCarousel></ListingCarousel>
        <ListingGeneralInfo></ListingGeneralInfo>
      </Stack>
    </Stack>
  );
}

export default ListingSingle;
