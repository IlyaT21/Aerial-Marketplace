import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Stack,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

type ListingCardProps = {
  product?: any;
};

const ListingCard: React.FC<ListingCardProps> = ({ product }) => {
  console.log(product.productImage);
  return (
    <Box>
      <Card elevation={4}>
        <CardContent>
          <CardMedia
            sx={{ paddingTop: 4, paddingBottom: 4 }}
            component="img"
            image={
              product?.productImage
                ? `http://localhost:5000/images/uploads/${product.productImage}`
                : "/images/placeholder/placeholder.webp"
            }
            alt={product.productName}
            height="250"
          />
          <Typography variant="h4" gutterBottom color="primary">
            {product.productName}
          </Typography>
          <Typography variant="h5" color="primary">
            {product.category}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ paddingTop: 4 }}
          >
            <CardActions sx={{ padding: 0 }}>
              <Button
                component={Link}
                to={`/listing/${product._id}`}
                size="small"
                variant="contained"
              >
                Read More
              </Button>
            </CardActions>
            <Typography variant="h5">${product.price}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ListingCard;
