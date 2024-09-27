import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TeamCard from "../components/TeamCard";
import { db } from "../firebase";

interface Team {
  id?: string;
  NAME: string;
  CITIES: Array<string>;
  HEYLOURL: string;
  INSTAGRAMURL: string;
  IMAGE: string;
}

function Teams() {
  const [teams, setTeams] = useState<Team[]>([]);
  useEffect(() => {
    const fetchTeams = async () => {
      const q = query(collection(db, "Teams"));
      const querySnapshot = await getDocs(q);
      const teamsArray = querySnapshot.docs.map((doc) => {
        const data = doc.data() as Team;
        return {
          id: doc.id,
          NAME: data.NAME,
          CITIES:data.CITIES,
          INSTAGRAMURL: data.INSTAGRAMURL,
          HEYLOURL: data.HEYLOURL,
          IMAGE: data.IMAGE,
        };
      });
      setTeams(teamsArray);
    };
    fetchTeams();
  }, []);

  // Llamar a la función para subir los datos

  return (
    <>
      <Header />
      <div className="mx-5 md:mx-14 my-10 w-fit">
        <h1 className=" text-5xl md:text-8xl font-bold text-secondary italic">
          EQUIPOS
        </h1>
        <span className=" h-1 bg-accent flex"></span>
      </div>

      <TeamCard teams={teams} />
      <Footer />
    </>
  );
}

export default Teams;
