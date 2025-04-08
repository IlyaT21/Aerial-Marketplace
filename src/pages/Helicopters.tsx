import React from "react";
import Hero from "../components/global/Hero";
import ListStack from "../components/listing/ListStack";

function Helicopters() {
  const heroData = {
    title: "Take Control with Helicopters",
    description: `Experience the thrill of vertical flight. Our helicopter listings feature a wide range—from agile personal copters to professional-grade rotorcraft. 
    Whether for adventure, transport, or business, find the helicopter that meets your altitude ambitions.`,
  };

  return (
    <>
      <Hero heroData={heroData}></Hero>
      <ListStack category="Helicopters"></ListStack>
    </>
  );
}

export default Helicopters;
