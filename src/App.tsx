import Header from "../src/components/Header.tsx";
import BannerAdvertisement from "./components/BannerAdvertisement.tsx";
import BannerCalendar from "./components/BannerCalendar.tsx";
import BannerContactUs from "./components/BannerContactUs.tsx";
import BannerFaq from "./components/BannerFaq.tsx";
import Footer from "./components/Footer.tsx";
function App() {
  return (
    <>
      <Header />
      <BannerAdvertisement />
      <BannerCalendar />
      <BannerFaq />
      <BannerContactUs />
      <Footer />
    </>
  );
}

export default App;
