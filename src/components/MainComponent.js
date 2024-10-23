import React from "react";
import CallToAction from "../components/CallToAction";
import Specials from "../components/Specials";
import Testnomials from "../components/Testnomials";
import Chicago from "../components/Chicago";
import Footer from "../components/Footer";

const MainComponent = () => {
  return (
    <main>
      <CallToAction />
      <Specials />
      <Testnomials />
      <Chicago />
      <Footer />
    </main>
  );
};

export default MainComponent;
