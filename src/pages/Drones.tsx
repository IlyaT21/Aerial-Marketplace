import React from "react";
import Hero from "../components/global/Hero";
import ListStack from "../components/listing/ListStack";

function Drones() {
  const heroData = {
    title: "Explore the World of Drones",
    description: `Unlock the power of perspective with our diverse collection of drones. Whether you're a hobbyist, professional filmmaker, or a tech enthusiast, 
    our drone listings offer the latest in aerial innovation—from high-speed racing drones to camera-equipped quadcopters built for stunning aerial shots.`,
  };

  return (
    <>
      <Hero heroData={heroData}></Hero>
      <ListStack category="Drones"></ListStack>
    </>
  );
}

export default Drones;
