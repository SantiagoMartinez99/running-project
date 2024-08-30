import BannerAdvertisement from "../components/BannerAdvertisement.tsx";
import BannerCalendar from "../components/BannerCalendar.tsx";
import BannerContactUs from "../components/BannerContactUs.tsx";
import BannerFaq from "../components/BannerFaq.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
function Home() {
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

export default Home;
