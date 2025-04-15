import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import ListingGeneralInfo from "./components/ListingGeneralInfo";
import ListingCarousel from "./components/ListingCarousel";
import ListingDetailedInfo from "./components/ListingDetailedInfo";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography } from "@mui/material";

function ListingSingle() {
  const { productId } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/products/${productId}`
        );
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  useEffect(() => {
    if (product) {
      console.log("Updated product:", product);
    }
  }, [product]);

  if (!product) {
    return <Typography pt={10}>Loading Product...</Typography>;
  }

  const generalInfo = {
    productName: product.productName,
    category: product.category,
    description: product.productDescription,
    price: product.price,
  };

  const detailedInfo = [
    { label: "Model", value: product.model },
    { label: "Manufacturer", value: product.manufacturer },
    { label: "Year", value: product.year },
    { label: "Condition", value: product.condition },
    { label: "Registration", value: product.registration },
  ];

  const sellerInfo = [
    { label: "First Name", value: product.sellerId.firstName },
    { label: "Last Name", value: product.sellerId.lastName },
    { label: "Company", value: product.sellerId.company },
    { label: "Country", value: product.sellerId.country },
    { label: "City", value: product.sellerId.city },
    { label: "Address", value: product.sellerId.address },
  ];

  return (
    <Stack
      paddingLeft={4}
      paddingRight={4}
      pt={{ xs: 4, md: 8 }}
      sx={{ maxWidth: "1400px" }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={4}
        alignItems={{ xs: "center", md: "flex-start" }}
        pb={{ xs: 0, md: 8 }}
      >
        <ListingCarousel
          productImage={product.productImage}
          productName={product.productName}
        ></ListingCarousel>
        <ListingGeneralInfo generalInfo={generalInfo} />
      </Stack>
      <ListingDetailedInfo sellerInfo={sellerInfo} generalInfo={detailedInfo} />
    </Stack>
  );
}

export default ListingSingle;
