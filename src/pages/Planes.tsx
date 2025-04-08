import React from "react";
import Hero from "../components/global/Hero";
import ListStack from "../components/listing/ListStack";

function Planes() {
  const heroData = {
    title: "Soar Higher with Aircraft Built to Fly",
    description: `Browse our premium collection of planes—ideal for both recreational flying and professional aviation. 
    From lightweight sport planes to advanced private aircraft, our listings are tailored to take you beyond the horizon in style and performance.`,
  };

  return (
    <>
      <Hero heroData={heroData}></Hero>
      <ListStack category="Planes"></ListStack>
    </>
  );
}

export default Planes;
