import { Stack } from "@mui/system";
import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import { useState } from "react";

function ListingGeneralInfo() {
  const [open, setOpen] = useState(false);
  return (
    <Stack width={{ xs: "100%", md: "50%" }} pt={4}>
      <Typography
        variant="h3"
        gutterBottom
        textAlign="left"
        sx={{ fontSize: { xs: "3rem", md: "4rem" } }}
      >
        Product Name
      </Typography>
      <Typography variant="h5" gutterBottom textAlign="left">
        Product Category
      </Typography>
      <Typography variant="body1" textAlign="left">
        Product Description - Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Veniam inventore, tempora neque molestias iste facere
        maxime asperiores temporibus optio tempore totam dicta et quasi eligendi
        labore. Ratione nulla temporibus dicta!
      </Typography>
      <Stack
        direction="row"
        alignItems="flex-end"
        justifyContent="space-between"
        py={8}
      >
        <Typography variant="body1">$250</Typography>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Contact Seller
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Contact Information</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Contact the seller using one of the methods bellow:
            </DialogContentText>
            <Stack alignItems="flex-start" my={4}>
              <Button href="mailto:selleremail@email.co">
                Email: selleremail@email.com
              </Button>
              <Button href="tel:+38158742688">Phone: +38158742688</Button>
            </Stack>
          </DialogContent>
        </Dialog>
      </Stack>
    </Stack>
  );
}

export default ListingGeneralInfo;
