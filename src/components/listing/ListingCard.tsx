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

function ListingCard() {
  return (
    <Box>
      <Card elevation={4}>
        <CardContent>
          <CardMedia
            sx={{ paddingTop: 4, paddingBottom: 4 }}
            component="img"
            image="/images/placeholder/drone-placeholder.png"
            alt="Thumbnail"
            height="250"
          />
          <Typography variant="h4" gutterBottom color="primary">
            Listing Title
          </Typography>
          <Typography variant="h5" color="primary">
            Category - prodCat
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ paddingTop: 4 }}
          >
            <CardActions sx={{ padding: 0 }}>
              <Button href="/listing" size="small" variant="contained">
                Read More
              </Button>
            </CardActions>
            <Typography variant="h5">$250</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ListingCard;
