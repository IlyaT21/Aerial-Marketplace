import { Stack } from "@mui/system";
import React from "react";
import ListingGeneralInfo from "./components/ListingGeneralInfo";
import ListingCarousel from "./components/ListingCarousel";
import ListingDetailedInfo from "./components/ListingDetailedInfo";

function ListingSingle() {
  return (
    <Stack paddingLeft={4} paddingRight={4} pt={{xs: 4, md: 8}} sx={{ maxWidth: "1400px" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={4}
        alignItems={{ xs: "center", md: "flex-start" }}
        pb={{xs: 0, md: 8}}
      >
        <ListingCarousel></ListingCarousel>
        <ListingGeneralInfo></ListingGeneralInfo>
      </Stack>
      <ListingDetailedInfo></ListingDetailedInfo>
    </Stack>
  );
}

export default ListingSingle;
