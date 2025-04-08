import React from "react";
import Hero from "../components/global/Hero";
import ListStack from "../components/listing/ListStack";

function Homepage() {
  const heroData = {
    title: "Welcome to Sky Riders!",
    description: `Buy. Sell. Soar. From drones to jets, helicopters to hobby planes — explore a world of high-flying opportunities. 
        Whether you're a seasoned aviator or just taking off, your next aircraft is waiting. 
        Trusted sellers. Verified listings. Global reach.`,
  };

  return (
    <>
      <Hero heroData={heroData}></Hero>
      <ListStack></ListStack>
    </>
  );
}

export default Homepage;
