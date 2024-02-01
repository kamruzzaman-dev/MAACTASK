import About from "../../component/landingPageComponent/About";
import CommonQuestion from "../../component/landingPageComponent/CommonQuestion";
import Connection from "../../component/landingPageComponent/Connection";
import Hero from "../../component/landingPageComponent/Hero";
import Impact from "../../component/landingPageComponent/Impact";
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
      <CommonQuestion />
      <Impact />
    </div>
  );
};

export default LandingPage;
