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
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

type GeneralInfoProps = {
  generalInfo: {
    productId: string;
    sellerId: string;
    productName: string;
    category: string;
    description: string;
    price: number;
    email: string;
    phone: number;
  };
};

function ListingGeneralInfo({ generalInfo }: GeneralInfoProps) {
  const [open, setOpen] = useState(false);

  const token = localStorage.getItem("token");

  let userId: string | null = null;

  if (token) {
    const decodedToken = jwtDecode<{ id: string }>(token);
    userId = decodedToken.id;
  }
  return (
    <Stack width={{ xs: "100%", md: "50%" }} pt={4}>
      <Typography
        variant="h3"
        gutterBottom
        textAlign="left"
        sx={{ fontSize: { xs: "3rem", md: "4rem" } }}
      >
        {generalInfo.productName}
      </Typography>
      <Typography variant="h5" gutterBottom textAlign="left">
        {generalInfo.category}
      </Typography>
      <Typography variant="body1" textAlign="left">
        {generalInfo.description}
      </Typography>
      <Stack
        direction="row"
        alignItems="flex-end"
        justifyContent="space-between"
        py={8}
      >
        <Typography variant="body1">${generalInfo.price}</Typography>
        {generalInfo?.sellerId === userId ? (
          <Button
            variant="contained"
            component={Link}
            to={`/edit-product/${generalInfo.productId}`}
          >
            Edit Product
          </Button>
        ) : (
          <Button variant="contained" onClick={() => setOpen(true)}>
            Contact Seller
          </Button>
        )}
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Contact Information</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Contact the seller using one of the methods bellow:
            </DialogContentText>
            <Stack alignItems="flex-start" my={4}>
              <Button href={`mailto:${generalInfo.email}`}>
                Email: {generalInfo.email}
              </Button>
              {generalInfo.phone && (
                <Button href={`mailto:${generalInfo.phone}`}>
                  Phone: {generalInfo.phone}
                </Button>
              )}
            </Stack>
          </DialogContent>
        </Dialog>
      </Stack>
    </Stack>
  );
}

export default ListingGeneralInfo;
