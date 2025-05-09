import { Box, Stack } from "@mui/material";

type ListingCarouselProps = {
  productImage: string;
  productName: string;
};

const ListingCarousel = ({
  productImage,
  productName,
}: ListingCarouselProps) => {
  const imageUrl = productImage
    ? `http://localhost:5000/uploads/${productImage}`
    : "/images/placeholder/placeholder.webp";

  return (
    <Stack
      display="flex"
      direction="row"
      width={{ xs: "100%", sm: "75%", md: "50%" }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt={productName}
        sx={{
          width: "100%",
          objectFit: "cover",
        }}
      />
    </Stack>
  );
};

export default ListingCarousel;
