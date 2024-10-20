import React from "react";
import CallToAction from "../components/CallToAction";
import Specials from "../components/Specials";
import Testnomials from "../components/Testnomials";
const Homepage = () => {
  return (
    <>
      <main className="main">
        <CallToAction />
        <Specials />
        <Testnomials />
      </main>
    </>
  );
};

export default Homepage;
