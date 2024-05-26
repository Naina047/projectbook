import Hero from "./Components/Hero";
import Quote from "./Components/Quote";
import SectionTwo from "./Components/SectionTwo";
import Testimonials from "./Components/Testimonials";
import Usp from "./Components/Usp";
import Wallframe from "./Components/Wallframe";
import QuoteCopy from "./Components/QuoteCopy"
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";

function App() {
  return (    
    <div>
      <Hero />
      <SectionTwo />
      <Quote />
      <Usp/>
      <Testimonials/>
      <Wallframe />
      <QuoteCopy />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
