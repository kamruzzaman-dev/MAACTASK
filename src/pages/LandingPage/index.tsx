import About from "../../component/landingPageComponent/About";
import Connection from "../../component/landingPageComponent/Connection";
import Hero from "../../component/landingPageComponent/Hero";
import ProductFeatures from "../../component/landingPageComponent/ProductFeatures";
import TabletAndMobileShowing from "../../component/landingPageComponent/TabletAndMobileShowing";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <TabletAndMobileShowing />
      <ProductFeatures />
      <About />
      <Connection />
    </div>
  );
};

export default LandingPage;
