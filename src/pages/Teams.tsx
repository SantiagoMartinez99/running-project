import Header from "../components/Header";
import TeamCard from "../components/TeamCard";
import Footer from "../components/Footer";

function Teams() {
  return (
    <>
      <Header />
      <div className="mx-5 md:mx-14 my-10 w-fit">
        <h1 className=" text-5xl md:text-8xl font-bold text-secondary italic">
          EQUIPOS
        </h1>
        <span className=" h-1 bg-accent flex"></span>
      </div>

      <TeamCard />
      <Footer />
    </>
  );
}

export default Teams;
