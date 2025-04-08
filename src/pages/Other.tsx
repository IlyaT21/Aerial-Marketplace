import React from "react";
import Hero from "../components/global/Hero";
import ListStack from "../components/listing/ListStack";

function Other() {
  const heroData = {
    title: "Explore the Unconventional",
    description: `Looking for something unique? Our "Other Aircraft" section features everything from airships and 
    gliders to experimental builds and rare collector's items. Perfect for aviation enthusiasts who think outside the cockpit.`,
  };

  return (
    <>
      <Hero heroData={heroData}></Hero>
      <ListStack category="Other"></ListStack>
    </>
  );
}

export default Other;
