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

function ListingDetailedInfo() {
  return (
    <Stack pb={{ xs: 4, md: 8 }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">Seller Infomration</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack gap={1}>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="body1" textAlign="left">
                First Name :
              </Typography>
              <Typography variant="body2">First Name</Typography>
            </Stack>
            <Divider></Divider>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="body1" textAlign="left">
                Last Name :
              </Typography>
              <Typography variant="body2">Last Name</Typography>
            </Stack>
            <Divider></Divider>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="body1" textAlign="left">
                Company :
              </Typography>
              <Typography variant="body2">Company</Typography>
            </Stack>
            <Divider></Divider>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="body1" textAlign="left">
                Country :
              </Typography>
              <Typography variant="body2">Country</Typography>
            </Stack>
            <Divider></Divider>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="body1" textAlign="left">
                City :
              </Typography>
              <Typography variant="body2">City</Typography>
            </Stack>
            <Divider></Divider>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="body1" textAlign="left">
                Address :
              </Typography>
              <Typography variant="body2">Address</Typography>
            </Stack>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">General Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack gap={1}>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="body1" textAlign="left">
                Model :
              </Typography>
              <Typography variant="body2">Model</Typography>
            </Stack>
            <Divider></Divider>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="body1" textAlign="left">
                Manufacturer :
              </Typography>
              <Typography variant="body2">Manufacturer</Typography>
            </Stack>
            <Divider></Divider>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="body1" textAlign="left">
                Year :
              </Typography>
              <Typography variant="body2">Year</Typography>
            </Stack>
            <Divider></Divider>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="body1" textAlign="left">
                Condition :
              </Typography>
              <Typography variant="body2">Condition</Typography>
            </Stack>
            <Divider></Divider>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="body1" textAlign="left">
                Registration :
              </Typography>
              <Typography variant="body2">Registration</Typography>
            </Stack>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}

export default ListingDetailedInfo;
