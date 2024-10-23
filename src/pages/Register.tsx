import { Box, Button, Stack, Typography } from "@mui/material";
import RegisterBuyer from "../components/register/RegisterBuyer";
import RegisterSeller from "../components/register/RegisterSeller";
import { useState } from "react";

type ProfileType = "buyer" | "seller" | null;

function Register() {
  const [profileType, setProfileType] = useState<ProfileType>(null);

  const handleSelectProfile = (type: ProfileType) => {
    setProfileType(type);
  };
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
      <Stack spacing={3} sx={{ width: "100%", margin: "0 auto" }}>
        {profileType === null ? (
          <Stack gap={4}>
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
            >
              Choose your profile type
            </Typography>
            <Stack
              direction={{ xs: "column", md: "row" }}
              gap={4}
              justifyContent="center"
            >
              <Box>
                <Button
                  variant="contained"
                  onClick={() => handleSelectProfile("buyer")}
                >
                  Register as Buyer
                </Button>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  onClick={() => handleSelectProfile("seller")}
                >
                  Register as Seller
                </Button>
              </Box>
            </Stack>
          </Stack>
        ) : (
          <>
            {profileType === "buyer" && (
              <RegisterBuyer handleSelectProfile={handleSelectProfile} />
            )}
            {profileType === "seller" && (
              <RegisterSeller handleSelectProfile={handleSelectProfile} />
            )}
          </>
        )}
      </Stack>
    </Stack>
  );
}

export default Register;
