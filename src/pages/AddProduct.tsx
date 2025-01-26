import { Stack } from '@mui/material';
import React from 'react'
import ProductAdd from '../components/admin/ProductAdd';

function AddProduct() {
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
      <ProductAdd></ProductAdd>
    </Stack>
  );
}

export default AddProduct