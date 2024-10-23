import React from "react";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import Testnomials from "./Testnomials";
import Chicago from "./Chicago";
import Footer from "./Footer";

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
