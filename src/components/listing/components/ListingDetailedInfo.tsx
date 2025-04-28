import { Stack } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";

type DetailedInfoProps = {
  generalInfo: { label: string; value: string | number }[];
  sellerInfo: { label: string; value: string | number }[];
};

function ListingDetailedInfo({ generalInfo, sellerInfo }: DetailedInfoProps) {
  return (
    <Stack pb={{ xs: 4, md: 8 }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">Seller Infomration</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack gap={1}>
            {sellerInfo.map((item, index) => (
              <Stack key={index}>
                <Divider />
                <Stack key={index} direction="row" alignItems="center" gap={1}>
                  <Typography variant="body1" textAlign="left">
                    {item.label}:
                  </Typography>
                  <Typography variant="body2">{item?.value || "/"}</Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">General Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack gap={1}>
            {generalInfo.map((item, index) => (
              <Stack key={index}>
                <Divider />
                <Stack key={index} direction="row" alignItems="center" gap={1}>
                  <Typography variant="body1" textAlign="left">
                    {item.label}:
                  </Typography>
                  <Typography variant="body2">{item?.value || "/"}</Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}

export default ListingDetailedInfo;
