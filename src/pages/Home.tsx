import BannerAdvertisement from "../components/BannerAdvertisement.tsx";
import BannerCalendar from "../components/BannerCalendar.tsx";
import BannerContactUs from "../components/BannerContactUs.tsx";
import BannerFaq from "../components/BannerFaq.tsx";
import Footer from "../components/Footer.tsx";
import FormInfo from "../components/FormInfo.tsx";
import Header from "../components/Header.tsx";
function Home() {
  return (
    <>
      <Header />
      <BannerAdvertisement />
      <BannerCalendar />
      <BannerFaq />
      <BannerContactUs />
      <FormInfo />

      <Footer />
    </>
  );
}

export default Home;
